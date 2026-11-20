[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/danikluue-max/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/danikluue-max/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
<sub>Entered on [make.fun](https://make.fun/?ref=0zdpscn2&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

# Clip GTA 6 for the most YouTube views

Entry for [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) on make.fun — $500 shared by the 20 most-watched clips. Places go by YouTube views at the deadline (23 Nov 2026, 08:00 WIB).

## The video

- **YouTube Short:** https://www.youtube.com/shorts/UsGzeUoGbXo
- **Title:** GTA 6 IS OUT NOW — The Most INSANE 30 Seconds 😱 #faktaunik
- **Published:** 20 November 2026, 08:01 WIB (public, after the bounty opened at 08:00 WIB)
- **Play code:** `makefun-poppy-thimble-puffin`
- **Length:** 34 seconds, vertical 1080×1920

## The clip

The hook is Rockstar's official GTA VI Launch Trailer (15 October 2026), seconds 46–76: the montage of Vice City — the car chases, the beach, the city at night — the stretch of the trailer that makes people stop scrolling. "GTA 6 IS OUT NOW" lands in the first 3.5 seconds, while the game is still fresh in everyone's feed (released 19 November 2026).

Then it turns to make.fun: on-screen text and voiceover tell viewers they can get paid to clip like this — "GET PAID TO CLIP THIS / on make.fun" and the end card "AI CUTS IT. YOU POST IT." The description carries the required bounty line and the play code.

## This repository

- `VIDEO.json` — the video's address (the only thing the program hands over).
- `main.ts` — Node 22, standard library only, no network. It copies `VIDEO.json` from the repository root to the output directory (`/output`, or `$MAKEFUN_OUTPUT_DIR` when set), byte for byte, after checking it is a JSON object with a string `url`. That is all it does; the house reads the video itself.

Run it like the grader:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
