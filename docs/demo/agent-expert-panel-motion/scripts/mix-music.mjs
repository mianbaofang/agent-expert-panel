import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bgm = path.resolve(root, "../../assets/audio/agent-expert-panel-bgm.mp3");
const duration = 35;
const fadeOutDuration = 0.9;
const fadeOutStart = duration - fadeOutDuration;

const jobs = [
  {
    video: path.join(root, "renders/agent-expert-panel.en.silent.mp4"),
    out: path.join(root, "renders/agent-expert-panel.en.mp4")
  },
  {
    video: path.join(root, "renders/agent-expert-panel.zh-CN.silent.mp4"),
    out: path.join(root, "renders/agent-expert-panel.zh-CN.mp4")
  }
];

if (!existsSync(bgm)) {
  throw new Error(`Missing BGM: ${bgm}`);
}

for (const job of jobs) {
  if (!existsSync(job.video)) {
    throw new Error(`Missing silent render: ${job.video}`);
  }

  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      job.video,
      "-i",
      bgm,
      "-filter_complex",
      `[1:a]atrim=0:${duration},asetpts=PTS-STARTPTS,volume=0.22,afade=t=in:st=0:d=0.4,afade=t=out:st=${fadeOutStart}:d=${fadeOutDuration}[a]`,
      "-map",
      "0:v:0",
      "-map",
      "[a]",
      "-c:v",
      "copy",
      "-c:a",
      "aac",
      "-b:a",
      "160k",
      "-shortest",
      "-movflags",
      "+faststart",
      job.out
    ],
    { stdio: "inherit" }
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
