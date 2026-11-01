# 🎵 Song Guessr

**👉 Best played in the [Brave browser](https://brave.com): its built-in ad blocker keeps YouTube ads from interrupting the music.**

A hidden-song guessing game for your phone. A YouTube song plays in the background, you guess the title and the artist and collect points. Play solo or with friends on one device. No ads, no account, no tracking.

## How to play

1. Open **https://fresh-philio.github.io/song-guessr/**
2. Choose your settings: genres, clip length (full song, 3, 10 or 20 seconds), start (beginning or random clip), number of rounds, Solo or Friends mode.
3. Tap **Start game**, then **Play**. Type what you think the title and artist are, tap **Reveal**, check the pre-filled boxes, tap **Next**.
4. Have fun! 🎉

Tip: add the page to your home screen (browser menu → *Install app* / *Add to Home screen*) to play it like an app. Tap the **?** button in the game for the in-game guide. The flags in the top bar switch between German and English, the moon/sun switches dark and light mode.

## Features

- Spinning record on a turntable; tap it to pause
- Solo (fixed number of rounds or endless) and Friends mode (2–12 names, "who guessed first", winner or tie)
- 12 genres out of the box, mix as many as you like
- Tolerant answer matching: case, accents, word order and small typos don't matter
- Points: title 2, artist 1; optional time bonus for short clips; hints (genre, length, start) cost points
- Your own YouTube playlists: add, switch on/off, replace the defaults or discard them completely
- History of your last games, dark mode, German and English

## Use your own playlists

Open **Manage playlists**, paste a YouTube playlist URL and give it a name. Playlists must be public or unlisted and must allow embedding; videos that cannot be played are skipped automatically. Default playlists can be edited in `playlists.js`.

## Known limitations

- Real playback needs https and YouTube; the page does not work as a local file.
- Chrome shows YouTube ads before many songs. Brave (built-in blocker) or Firefox with uBlock Origin are recommended. Whether a blocker also works inside an installed home-screen app is untested.
- Some videos forbid embedding (YouTube error 101/150) and are skipped.

## Privacy

Everything is stored locally in your browser (`localStorage`). The game uses the YouTube IFrame Player API; no API key, no server, no analytics. Not affiliated with YouTube or Google.

## Release notes

### 2.1.0 – 2026-11-01
- New: dark/light mode switch in the top bar (follows the system setting on first visit)
- New: German/English language switch with flags (follows the browser language on first visit)
- New: English README with quick-start guide and release notes

### 2.0.0 – 2026-11-01
- First public release
- Solo and Friends mode (up to 12 players), winner/tie screen
- Hidden playback on a turntable with animated tonearm
- Clip modes: full song, 3 / 10 / 20 seconds, start from the beginning or at a random position
- Fuzzy answer matching against the YouTube title and channel, editable result checkboxes
- Scoring: title 2, artist 1, optional time bonus, hints with point cost
- Playlist manager with custom playlists and default overrides; 12 default genres
- Automatic skip of unplayable videos; game history; installable PWA
