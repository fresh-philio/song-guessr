Song Guessr – PWA-Paket (Etappe 0: Testseite)

Dateien: index.html, playlists.js, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, HANDOFF.md, PLAYLISTS.md

Hosting (GitHub Pages):
1. Repo "song-guessr" anlegen, alle Dateien (ohne HANDOFF.md/PLAYLISTS.md, falls du sie nicht öffentlich willst) in den Root pushen.
2. Settings > Pages > Branch main / root.
3. https://<name>.github.io/song-guessr/ am Handy öffnen. NICHT als lokale Datei öffnen, YouTube-Einbettung braucht https.

Test: Playlist-URL einfügen > "Playlist laden" > Zahl der Videos prüfen > "Abspielen".
Bei Updates: sw.js ist Network-first, ein Reload reicht normalerweise.
