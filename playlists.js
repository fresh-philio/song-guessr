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
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLc6OoqL0xc0aKOQunbVrG9xlSfkTeflhe', status: 'ungeprüft (von Phil)' } ] },
    { id: 'film', name: 'Film-Titelmelodien', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PL4BrNFx1j7E5qDxSPIkeXgBqX0J7WaB2a', status: 'ungeprüft (von Phil)' } ] },
    { id: 'pop', name: 'Pop', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLplXQ2cg9B_qrCVd1J_iId5SvP8Kf_BfS', status: 'ungeprüft (von Phil)' } ] },
    { id: 'oldies', name: 'Oldies', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLbnusB-ofiRuLUb2i6YnqDR0m-yjof1rS', status: 'ungeprüft (von Phil)' } ] },
    { id: 'rap', name: 'Rap', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLqsBPTegBGMG3acuRYMLpDvgC-5esWrZA', status: 'ungeprüft (von Phil)' } ] },
    { id: 'charts', name: 'Charts', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PL3-sRm8xAzY9sDilvaWjCwCI0TkUzYdOG', status: 'ungeprüft (von Phil)' } ] },
    { id: '80er', name: '80er', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLd5xnond3B5Q76AHn0yU7iuCU5j7b4DLi', status: 'ungeprüft (von Phil)' } ] },
    { id: '90er', name: '90er', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLYVjGTi85afou-GAHkhC6OgU7Merg0G0B', status: 'ungeprüft (von Phil)' } ] },
    { id: '2000er', name: '2000er', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLDef6fout0FTkoIXW_DtGHGBtoL7F_JRK', status: 'ungeprüft (von Phil)' } ] },
    { id: 'rock', name: 'Rock', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP', status: 'ungeprüft (von Phil)' } ] },
    { id: 'deutsch', name: 'Deutsch (Pop/Schlager)', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLw-VjHDlEOgtwFlySm1JHphU3j8wUtSlu', status: 'ungeprüft (von Phil)' } ] },
    { id: 'games', name: 'Videospiel-Musik', playlists: [
      { name: 'Standard', url: 'https://youtube.com/playlist?list=PLT2CRsQGmDARh_T7Dtg8T75iSrcLtTnVz', status: 'ungeprüft (von Phil)' } ] }
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
