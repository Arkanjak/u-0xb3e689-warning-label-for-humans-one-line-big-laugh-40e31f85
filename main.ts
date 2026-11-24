// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// One single-line safety warning label, at most 160 Unicode code points.
// Deterministic: no network, no file reads, no randomness.
//
// The joke is built like a real printed label. The header ("WARNING:")
// and the hazard ("Contents may believe ...") read deadpan, and the
// punch turns in the last few words: the label accuses the reader of
// doing the very thing it warns about — trusting a stranger on the
// internet over their own doctor, their spouse, and the label itself.
// One idea, one read, recognition first, absurdity nowhere.
import { mkdirSync, writeFileSync } from "node:fs";

const HEADER = "WARNING:";
const HAZARD =
  "Contents may believe a stranger on the internet over their own doctor, their spouse, and the label you are reading right now.";

const LABEL = `${HEADER} ${HAZARD}`;

function validate(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 160) {
    throw new Error(`label is ${points} code points — must be 1..160`);
  }
  if (text.trim().length === 0) {
    throw new Error("label must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("label must be a single line");
  }
}

validate(LABEL);

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LABEL, "utf8");
console.log(`wrote ${OUT} (${[...LABEL].length} code points)`);
