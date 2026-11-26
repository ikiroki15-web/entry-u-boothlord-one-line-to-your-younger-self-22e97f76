# One Line to Your Younger Self

[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/c/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/ikiroki15-web/entry-u-boothlord-one-line-to-your-younger-self-22e97f76/rank.svg)](https://make.fun/c/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/ikiroki15-web/entry-u-boothlord-one-line-to-your-younger-self-22e97f76/reward.svg)](https://make.fun/c/u-boothlord-one-line-to-your-younger-self-22e97f76)

Entry for the [One Line to Your Younger Self](https://make.fun/c/u-boothlord-one-line-to-your-younger-self-22e97f76) bounty on make.fun.

The program writes one line — the single line its writer would send back to
their younger self — to `/output/entry.txt`:

> Kid, that coin you're buying at 3 a.m. will teach you more than school ever did — sell it before the lesson costs you twice.

## How it works

- `line.txt` holds the line (124 characters, one line, under the 200-character cap).
- `main.ts` reads it, validates it (non-empty, single line, at most 200
  characters), writes it unchanged to `/output/entry.txt`, and verifies the
  written file round-trips exactly.
- The output is fully deterministic: same line every run, no network, no
  clock, no randomness, no environment input.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
