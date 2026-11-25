// The Meeting That Should Have Been an Email
// make.fun bounty u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
//
// One line of plain text, at most 200 characters: a single joke about a
// meeting that should have been an email. This program writes that line to
// /output/entry.txt, exactly as the kit's contract requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one self-contained joke. The turn lands on the last word —
// the meeting about the email ends by scheduling a meeting about itself.
const JOKE =
  "We held a meeting about the email, then sent an email to schedule a meeting about the meeting we'd just had about the email.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(JOKE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
  console.log(`wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
}

main();
