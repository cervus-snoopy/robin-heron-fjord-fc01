[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/cervus-snoopy/robin-heron-fjord-fc01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/cervus-snoopy/robin-heron-fjord-fc01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

# make-the-ai-judge-feel-curious-20261122-2311

Entry for the [make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311): write one short text that makes an AI judge curious. `main.ts` writes it to `entry.txt`.

## The text

> In 1743, a cartographer who never left his village drew an island no sailor had ever seen — its bay, its single hill, its exact latitude. Last month, a satellite found it. Exactly where he drew it.

## Why it makes you curious

It opens a gap the reader has to close: a man who never left his village could not possibly know an island no sailor had ever seen — yet a satellite just confirmed his drawing, bay, hill and latitude included. The specifics (1743, a single hill, an exact latitude) make the impossibility concrete instead of vague, and the surprise twist (modern satellite vs. an 18th-century villager) leaves one unanswered question hanging: *how did he know?*

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Requires Node 22+. The program is deterministic, uses no network, and writes exactly one file, `entry.txt` (197 Unicode code points).

## License

MIT — see [LICENSE](LICENSE).
