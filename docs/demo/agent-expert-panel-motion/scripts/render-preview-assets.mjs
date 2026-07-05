import { copyFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.resolve(root, "../../assets");

const jobs = [
  {
    video: path.join(root, "renders/agent-expert-panel.en.mp4"),
    gif: path.join(assets, "intro-animation-preview.gif"),
    gifAlias: path.join(assets, "intro-animation-preview-en.gif"),
    png: path.join(assets, "intro-animation-preview.png"),
    pngAlias: path.join(assets, "intro-animation-preview-en.png")
  },
  {
    video: path.join(root, "renders/agent-expert-panel.zh-CN.mp4"),
    gif: path.join(assets, "intro-animation-preview-zh.gif"),
    gifAlias: path.join(assets, "intro-animation-preview-zh-CN.gif"),
    png: path.join(assets, "intro-animation-preview-zh.png"),
    pngAlias: path.join(assets, "intro-animation-preview-zh-CN.png")
  }
];

function run(args) {
  const result = spawnSync("ffmpeg", args, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

for (const job of jobs) {
  if (!existsSync(job.video)) {
    throw new Error(`Missing rendered MP4: ${job.video}`);
  }

  run([
    "-y",
    "-i",
    job.video,
    "-vf",
    "fps=8,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=96[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5",
    job.gif
  ]);

  run([
    "-y",
    "-ss",
    "00:00:02.600",
    "-i",
    job.video,
    "-frames:v",
    "1",
    "-update",
    "1",
    job.png
  ]);

  copyFileSync(job.gif, job.gifAlias);
  copyFileSync(job.png, job.pngAlias);
}
