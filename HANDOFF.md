# Song Guessr – HANDOFF (Stand: v1.2 = Etappe 1 + Feedback + Etappe 2, wartet auf Handy-Test)

## Projekt
PWA-Handyspiel: versteckter YouTube-Song, Titel+Interpret raten, Punkte. Phil (Webentwickler), informelles Deutsch, Free-Limit knapp: sparsam arbeiten, Edit statt Neuschreiben, kein Zwischengelaber. Auslieferung als ZIP per SendUserFile, Hosting GitHub Pages (Repo "song-guessr", Upload über "Add file", Dateien überschreiben sich), Test auf Android (Brave). Nicht als Claude-Artifact (YouTube-Embeds gesperrt).

## Dateien
index.html (Spiel), test.html (Etappe-0-Testseite, bleibt zur Playlist-Diagnose), playlists.js (Genres/Standard-Playlists/Rausch-Regex, von Phil editierbar), manifest.webmanifest, sw.js (Prefix "songguessr-", Cache v1, Network-first), icon-192/512.png, README.txt, PLAYLISTS.md (Kandidatenliste), HANDOFF.md.
localStorage "songguessr-v1": settings{len,start,rounds,genres}, pl{discardDefaults,override{genreId:url},off{key:true},custom[{id,name,url,on}]}, idCache{playlistId:{ids,t}} (7 Tage), testUrl (nur test.html).

## Stand Etappe 1 (im Headless-Test mit Fake-Player 39/39 grün)
- Home: Genre-Chips (mehrfach, nichts = gemischt; Genres ohne Playlist "(leer)" gesperrt), Länge ganz/3/10/20, Start Anfang/zufällig, Runden 5/10/20/endlos, Spiel starten, Playlists verwalten, "?"-Hilfe.
- Spiel: Schallplatte (SVG, zufällige Label-Farbe, dreht beim Abspielen), Status "lädt …", Titel/Interpret-Felder, Abspielen (danach "Nochmal hören" = gleicher Ausschnitt), Pause, Player anzeigen/verbergen, Überspringen, Aufdecken (erst nach erstem Abspielen).
- Pro Runde KEIN Autoplay (Phils Wunsch: Abspielen immer per Tipp). Fehler 2/5/100/101/150 → automatisch anderer Song, aber ebenfalls per Tipp starten.
- Aufdecken: Player wird sichtbar (Slot), YouTube-Titel + Kanal + "Erkannt", Haken Titel/Interpret per Abgleich vorbelegt, korrigierbar, Punkte-Vorschau, Weiter/Ergebnis. Endscreen mit Gesamtpunkten und Rundenliste.
- Punkte: PTS={title:2,artist:1} (Konstanten oben im Script). Kein Zeitbonus/keine Hinweise (Etappe 3).
- Abgleich: norm (Umlaute→ae/oe/ue, Akzente weg), Token-Vergleich, Stoppwörter, Tippfehler (Lev ≤1, ab 7 Zeichen ≤2), cov≥0.75 und recall (Titel ≥0.6, Interpret ≥0.34). Titel gegen Titelteil + ganzen bereinigten Titel; Interpret gegen Interpretteil + Kanal (" - Topic"/"VEVO" entfernt) + ganzen Titel. Gleicher Text in beiden Feldern zählt nur einmal. Bekannte Schwäche: YouTube-Titel im Format "Song - Interpret" (umgekehrt) → Interpret-Haken oft falsch, Nutzer korrigiert.
- Rausch-Regex in playlists.js (`noise`) + automatisch Klammern mit official/video/audio/lyric/remaster/HD/4K. Bewusst kein nacktes "video"/"lyrics".
- Playlist-Verwaltung: Standardsatz verwerfen (Toggle), pro Standardzeile eigene URL als Override, eigene Playlists (Name+URL) hinzufügen/löschen, einzeln an/aus, "Prüfen" (zeigt Videoanzahl, aktualisiert Cache). Auswahl: erst Playlist zufällig, dann Lied aus eigenem Deck ohne Wiederholung.
- Hilfe: Ablauf, Punkte, Player/Werbung (Chrome zeigt bei jedem Song Werbung, Brave blockt sie – von Phil getestet; Firefox+uBlock ungeprüft; PWA-Fenster offen).
- Architektur: Hauptplayer ohne Playlist (nur loadVideoById), Playlist-IDs über kurzlebige Temp-Player (getPlaylist), danach destroy.

## Änderungen v1.2 (nach Phils Test von v1.0)
- Test v1.0: "macht schon Spaß", Bedienbarkeit gut, aber optisch "sehr nach Programm". Fehler 150 trat 2x auf.
- Fehler 2/5/100/101/150 → automatisch nächster Song UND automatischer Start (setzt auf "sticky activation" nach dem ersten Tipp; max. 4 Fehler in Folge, dann Meldung). UNGEPRÜFT am Handy.
- Icons (Inline-SVG, currentColor) an Abspielen/Nochmal hören/Pause/Player/Aufdecken/Weiter/Start.
- "Überspringen" → kleiner Link-Notknopf "Hängt? Anderen Song laden" (Phil: sonst wird damit geskippt; Punktabzug fürs Skippen wäre die Alternative, bisher nicht gebaut).
- Look: Gradient-Hintergrund (hell: Pfirsich/Lila/Blau, dunkel: Violett-Glow), Glas-Karten, Gradient-Buttons, Logo-Platte.
- Plattenspieler-SVG (#tt) statt einzelner Platte: Nadel schwenkt beim Laden auf die Platte (leichtes Wackeln), bleibt beim Abspielen, hebt bei Pause/Ende ab, LED leuchtet, Platte dreht bei loading/playing. Zustände per setTT('idle'|'loading'|'playing'). Phils Idee "Plattenspieler als Hintergrund" bewusst als Held-Element im Spielscreen umgesetzt statt als Vollbild-Hintergrund (ruhiger). Weiterer Look-Ausbau evtl. in Etappe 3.

## Stand Etappe 2: Freunde-Modus (Headless-Test 18/18 grün)
- Home: Modus Solo | Freunde (ein Gerät), 2-8 Namen (Duplikate/zu wenige → Meldung), in localStorage (settings.mode, settings.names).
- Spiel: Select "Wer hat zuerst geraten?" (bitte wählen / Namen / niemand), Pflicht vor Weiter. Punkte der Runde (Haken-Summe) an die gewählte Person, "niemand" = 0. HUD-Zeile mit Scoreboard.
- Ende: Sieger (🏆) oder "Gleichstand: A & B", Rangliste, Rundenliste mit Person.

## UNGEPRÜFT (echte Wiedergabe nicht möglich)
- Hauptplayer ohne Playlist/Video erzeugen + loadVideoById (war in Etappe 0 mit Playlist-Player bewiesen, hier neu).
- Temp-Player pro Playlist erzeugen/zerstören mehrfach hintereinander.
- Mehrere Playlists im Wechsel, Cache-Verhalten, Abgleich mit echten YouTube-Titeln (deutsche Titel, Feature-Angaben).
- Autoplay-Problem aus Etappe 0 (cue direkt vor load verschluckt?) ist durch "immer per Tipp" umgangen, Ursache nie geklärt.
- Ladezeit Abspielen→Seek ca. 5-6 s (Werbung in Chrome); nur Status "lädt …" als Abhilfe, kein Vorladen.

## Entscheidungen
- Keine Schwierigkeitsstufen. Werbung vorerst ignoriert. Standard-Playlists fast leer (nur Film-Testliste), Phil trägt eigene ein (z. B. PLmXxqSJJq-yXrCPGIT2gn8b34JjOrl4Xf, 186 Videos, lief gut).
- Genres: Kinderserien, Film, Pop, Oldies, Rap, Charts, 80er, 90er, 2000er, Rock, Deutsch, Videospiel-Musik (+ "Eigene" für eigene Playlists).

## Nächste Schritte
1. Phil testet Etappe 1 am Handy, meldet Probleme (Spielfluss, Abgleich-Treffer, Playlist-Verwaltung, Hauptplayer).
2. Phil testet v1.2 (Freunde-Modus, Fehler-Autoplay, Plattenspieler).
3. Etappe 3: Hinweise (−1 je, konfigurierbar: Genre/Playlist-Name, Buchstaben/Wörter, erste ~10 %, Video einblenden), Zeitbonus (3 s ×3, 10 s ×2, 20 s ×1,5, ganz ×1 sinkend, an/aus), Icon-Feinschliff, Verlauf. Punkte nie unter 0.
HANDOFF.md nach jeder Etappe aktualisieren.
