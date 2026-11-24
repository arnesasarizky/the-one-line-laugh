import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my agent who broke production; it ran `git blame`, stared at my name for a full minute, and opened a ticket titled 'pre-existing condition.'";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const MAX_LENGTH = 200;

function assertWithinLimit(line: string): void {
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Line is ${line.length} characters, exceeding the ${MAX_LENGTH}-character limit.`,
    );
  }
}

function main(): void {
  assertWithinLimit(LINE);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
