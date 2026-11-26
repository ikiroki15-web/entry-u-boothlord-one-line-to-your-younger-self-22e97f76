// One Line to Your Younger Self — entry program.
//
// Reads the single line shipped beside this file (line.txt) and writes it,
// unchanged, to /output/entry.txt, where the judge reads it. The output is
// fully deterministic: the same line every run, no network, no clock, no
// randomness, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE_PATH = join(HERE, "line.txt");
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 200;

function loadLine(): string {
  const raw = readFileSync(SOURCE_PATH, "utf8");
  // The shipped file ends with one newline; strip trailing line breaks only,
  // so the line itself is written byte for byte as authored.
  const line = raw.replace(/[\r\n]+$/, "");
  if (line.length < 1) {
    throw new Error("line.txt is empty: the entry needs one line of text");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("line is only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("line must be a single line, no line breaks inside it");
  }
  return line;
}

function main(): void {
  const line = loadLine();
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  // Round-trip check: what the judge will read must be exactly the line.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== line) {
    throw new Error("round-trip mismatch: /output/entry.txt differs from line.txt");
  }
  console.log(`wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
