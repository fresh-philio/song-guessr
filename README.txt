Song Guessr – PWA-Paket (v1.2)

Dateien: index.html (Spiel), test.html (Testseite), playlists.js, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, HANDOFF.md, PLAYLISTS.md

Hosting (GitHub Pages):
1. Repo "song-guessr" anlegen, alle Dateien (ohne HANDOFF.md/PLAYLISTS.md, falls du sie nicht öffentlich willst) in den Root pushen.
2. Settings > Pages > Branch main / root.
3. https://<name>.github.io/song-guessr/ am Handy öffnen. NICHT als lokale Datei öffnen, YouTube-Einbettung braucht https.

Eigene Playlists trägst du in der App unter "Playlists verwalten" ein. Diagnose einer Playlist: test.html.
Bei Updates: sw.js ist Network-first, ein Reload reicht normalerweise.
