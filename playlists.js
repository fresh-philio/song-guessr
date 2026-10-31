/* Song Guessr – Songlisten und Rausch-Filter. Von dir editierbar.
 *
 * Playlist-URL: normale YouTube-Playlist-URL oder nur die ID (PL..., OLAK5uy_..., RD...).
 * status: "ungeprüft" | "ok" | "defekt" – nur Notiz für dich, die App wertet es nicht aus.
 * Leere url = Genre hat noch keine Standard-Playlist (wird im Spiel übersprungen).
 * IDs hier NUR aus echten URLs eintragen, nie raten.
 * Eigene Playlists trägst du direkt in der App unter "Playlists" ein (landen in localStorage).
 */
window.SG_PLAYLISTS = {
  genres: [
    { id: 'kinderserien', name: 'Kinderserien-Intros', playlists: [
      { name: '(noch leer)', url: '', status: 'offen' } ] },
    { id: 'film', name: 'Film-Titelmelodien', playlists: [
      // Echte URL aus einem Uni-Blog (Parsons Playlists: Movie Music). Vermutlich KLEIN (Dutzende Titel), nur zum Testen.
      { name: 'Movie Music (Richmond, klein)', url: 'https://youtube.com/playlist?list=PLU94rco57ZewCfuxxV4Gk3YIhi4ez0R4E', status: 'ungeprüft' } ] },
    { id: 'pop',      name: 'Pop',                   playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'oldies',   name: 'Oldies',                playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'rap',      name: 'Rap',                   playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'charts',   name: 'Charts',                playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: '80er',     name: '80er',                  playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: '90er',     name: '90er',                  playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: '2000er',   name: '2000er',                playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'rock',     name: 'Rock',                  playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'deutsch',  name: 'Deutsch (Pop/Schlager)',playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] },
    { id: 'games',    name: 'Videospiel-Musik',      playlists: [{ name: '(noch leer)', url: '', status: 'offen' }] }
  ],
  // Rauschen im YouTube-Titel (Regex-Quellen, Groß/Klein egal), wird vor dem Abgleich entfernt.
  // Klammern mit Wörtern wie official/video/audio/lyric/remaster/HD/4K werden zusätzlich automatisch entfernt.
  // Absichtlich KEIN nacktes "video" oder "lyrics", sonst leidet z.B. "Video Killed the Radio Star".
  noise: [
    'official\\s+(music\\s+)?(video|audio|lyric\\s+video|visuali[sz]er)',
    'official\\s+hd\\s+video',
    'lyric\\s+video',
    '\\b(4k|1080p|720p)\\b',
    '\\bremaster(ed)?(\\s+\\d{4})?\\b',
    '\\s-\\sTopic$'
  ]
};
