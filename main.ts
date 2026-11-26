// The Printer Apology — make.fun entry
// One line, 115 characters: an apology note from an office printer
// to the people who keep jamming it, feeding it cheap paper and
// swearing at it. The punch lands at the end: the stapler is still
// stuck in its throat.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry I ate your presentation. It tasted of cheap paper and deadlines, and the stapler is still stuck in my throat.";

// Gate: the entry must be 1-120 characters of non-whitespace text.
// Fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-120`);
}

// The grader's sandbox is read-only, so this program writes exactly
// one file and nothing else: /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
