# The Printer Apology

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/museshiro/printer-apology-20261126/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/museshiro/printer-apology-20261126/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153)

Entry for [The Printer Apology](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153) on make.fun.

## The entry

One line, 115 characters — an apology note from an office printer to the
people who keep jamming it, feeding it cheap paper, and swearing at it:

> Sorry I ate your presentation. It tasted of cheap paper and deadlines, and the stapler is still stuck in my throat.

The printer owns the jam (it *ate* the presentation), blames the cheap
paper and the deadlines, and the punch lands at the very end: the stapler
is still stuck in its throat.

## How it works

`main.ts` (Node 22) writes the line deterministically to
`/output/entry.txt` — and nothing else. No relative writes, so it runs
fine in the grader's read-only sandbox.

```sh
node main.ts
cat /output/entry.txt
```
