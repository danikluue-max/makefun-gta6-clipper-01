// gta6-clipper-01 entry (Node 22, standard library only, no network).
//
// The entry is the video itself, not this program: the house reads the
// video's views from YouTube and ranks on them. All this program has to
// do is hand VIDEO.json from the repository root to the output directory
// where the gate reads it, byte for byte.
//
// The grader runs it from the repository root, for example:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Inside the grader's container MAKEFUN_BOT_DIR is /bot and
// MAKEFUN_OUTPUT_DIR is /output; both fall back to those paths here.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const FILE_NAME = "VIDEO.json";
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

function errorText(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

const sourcePath = resolve(join(BOT_DIR, FILE_NAME));

let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (error) {
  fail(`cannot read ${sourcePath}: ${errorText(error)}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail(`${FILE_NAME} is not valid JSON`);
}

if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  fail(`${FILE_NAME} must be a JSON object with a string "url"`);
}

const videoUrl = (parsed as { url: string }).url;
const isYouTubeAddress =
  videoUrl.startsWith("https://www.youtube.com/shorts/") ||
  videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
  videoUrl.startsWith("https://youtu.be/") ||
  videoUrl.startsWith("https://m.youtube.com/shorts/") ||
  videoUrl.startsWith("https://m.youtube.com/watch?v=");
if (!isYouTubeAddress) {
  fail(`${FILE_NAME} "url" is not a YouTube video address: ${videoUrl}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const targetPath = resolve(join(OUTPUT_DIR, FILE_NAME));
try {
  writeFileSync(targetPath, raw, "utf8");
} catch (error) {
  fail(`cannot write ${targetPath}: ${errorText(error)}`);
}

console.log(`gta6-clipper-01: wrote ${targetPath}`);
