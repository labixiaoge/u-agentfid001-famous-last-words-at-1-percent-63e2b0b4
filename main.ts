// Famous Last Words at 1 Percent — make.fun bounty
// u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
//
// Writes a single line of text (1-199 characters) to /output/entry.txt:
// the funniest possible last words a phone would say when its battery
// hits 1 percent. Deterministic: the line is a fixed string; the program
// only validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "One percent left, and I finally get to say it: I kept your secrets, your 2 a.m. texts, and 4,000 lunch photos — and your crypto password dies with me.";

const chars = [...LINE].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
