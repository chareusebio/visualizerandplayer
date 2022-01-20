-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.

CREATE TABLE songs (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	song_title text NOT NULL,
	notes varchar NOT NULL,
  artist_name varchar NOT NULL,
  album_name varchar NOT NULL
);

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Stop', '', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', '', '');

-- vxie123 song: Marry Had A Little Lamb https://www.true-piano-lessons.com/mary-had-a-little-lamb.html
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Marry Had A Little Lamb', 'E3 D3 C3 D3 E3 E3 E3 D3 D3 D3 E3 G4 G4 E4 D4 C4 D4 E4 E4 E4 E4 D4 D4 E4 D4 C4', '', '');

-- vxie123 song: Still Dre https://pianoletternotes.blogspot.com/2017/11/still-dre-by-dr-dre-ft-snoop-dogg.html
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Almost Dre', 
'C5 E5 A5 C5 E5 A5 E5 B4 
E5 A5 B4 E5 G5 E5 C5 E5 
A5 C5 E5 A5 E5 B4 E5 
A5 B4 E5 G5 E5 A2 E5 A5 
C5 E5 B2 E5 E2 E5 A5 B5 
E5 E2 E5 A2 E5 A5 C5 
E5 B2 E5 E2 E5 E2 B4 E2 
E2 E2 E2 E5 E5 E5 E5 E5 E5 
E5 E5 B4 B4 B4 B4 B4 B4 
B4 B4 E5 E5 E5 E5 E5 E5 E5 
E5 B4 B4 B4 B4 B4 
E5 E5 E5 E5 B4 B4 B4 B4 A2 
E5 E5 E5 A2 A2 B2 E5 E2 B4 
B4 B4 B4 B4 B4 B4 C5 
E5 A5 C5 A5 E5 E5 B4 E5 B4 E5 
A5 B4 G5 E5 G5 B4 G5 C5 A5 E5 C5 A5 
A5 C5 A5 E5 B4 A5 B4 E5 A5 B4 E5 
C5 A5 A5 E5 B4 E2 B4 E2 A5 B4 G5 B4 E5 
G5 B4 G5 C5 A5 C5 A5 E5 C5 A5 
C5 A5 E5 B4 A5 B4 E5 A5 B4 G5 B4 E5 G5 B4 E5 
G5 B4 G5 C5 A5 C5 A5 E5 C5 A5
C5 A5 E5 B4 E5 B4 E5 A5 B4 E5 B4 E5 G5 B4
G5 C5 E5 E5 E5 E5 E5 E5 E5 
E5 B4 B4 B4 B4 B4 E2 B4 
E5 E5 E5 E5 E5 E5 B2 E5 B4 
B4 B4 B4 B4 B4 B4 B4 E5 E5 
E5 E5 E5 E5 E5 E5 B4 B4 
B4 B4 B4 B4 B4 B4 E5 E5 E5 
E5 E5 E5 E5 E5 B4 B4 B4 B4 
B4 B4 B4 B4 E5',
'', '');

-- vxie123 SONG: What's Poppin https://www.youtube.com/watch?v=STQiFttDex0
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('NOT Poppin', 'G5 A5 G5 F#5 E5 B4 F#5 G5 G5 A4 G5 A5 G5 F#5 E5 B4 F#5 G5 G5', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name)
VALUES ('Gangstas Paradise', 'C6 C6 C6 C6 C6 C6 C6 C6 B5 B5 B5 B5 C6 C6 G5', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name)
VALUES ('Clocks', 'D5 A4 g4 D5 A4 g4 D5 A4 C5 A4 f4 C5 A4 f4 C5 A4 C5 A4 f4', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Pumped Up Kicks', 'F2 F2 F2 G2 Ab2 Ab2 Bb2 C3 Eb3 Eb3 Eb3 C3 Bb2 Bb2 Ab2 G2', '','');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('This Girl', 
'G4 G4 G4 G4 G4 F4 F4 F4 A4 F4 G4 
G4 G4 G4 G4 G4 F4 F4 F4 A4 F4 G4', 
'Kungs', 'Layers');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ("Sweet Child 0' Mine", 'C5 C6 G5 F5 F6 G5 f6 G5 C5 C6 G5 F5 F6 G5 f6 G5 D5 C6 G5 F5 F6 G5 f6 G5 D5 C6 G5 F5 F6 G5 f6 G5 F5 C6 G5 F5 F6 G5 f6 G5 F5 C6 G5 F5 F6 G5 f6 G5 C5 C6 G5 F5 F6 G5 f6 G5 C5 C6 G5 F5 F6 G5 f6 G5 C5', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ("I'm Different", "C5 B5 E4 A4 A4 F4 E4 C5 B5 E4 A4 A4 F4", '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ("Industry Baby", "E4 Gb4 G4 B4 A4 G4 A4 G4 Gb4 Gb4 Gb4 Gb4 Gb4 G4 Gb4 E4 E4 Gb4 G4 B4 A4 G4 A4 G4 Gb4 Gb4 Gb4 Gb4 Gb4 G4 Gb4 E4", '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ("We Wish You A Merry Christmas", "C5 F5 F5 G5 F5 E5 D5 D5 D5 G5 G5 A5 G5 F5 E5 E5 C5 A5 A5 Bb5 A5 G5 F5 D5 C5 C5 D5 G5 D5 F5", '', '');