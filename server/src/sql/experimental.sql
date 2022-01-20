-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`artist` ;

CREATE TABLE IF NOT EXISTS `mydb`.`artist` (
  `artist_id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`artist_id`, `artist_name`),
  UNIQUE INDEX `artist_id_UNIQUE` (`artist_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`album`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`album` ;

CREATE TABLE IF NOT EXISTS `mydb`.`album` (
  `album_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NULL,
  `artist_id` INT NULL,
  `album_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`album_id`, `album_name`),
  INDEX `fk_Album_Artist_idx` (`artist_id` ASC, `artist_name` ASC) VISIBLE,
  CONSTRAINT `fk_Album_Artist`
    FOREIGN KEY (`artist_id` , `artist_name`)
    REFERENCES `mydb`.`artist` (`artist_id` , `artist_name`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`songs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`songs` ;

CREATE TABLE IF NOT EXISTS `mydb`.`songs` (
  `song_id` INT NOT NULL AUTO_INCREMENT,
  `song_title` VARCHAR(45) NULL,
  `notes` VARCHAR(1000) NULL,
  `album_id` INT UNSIGNED NULL,
  `album_name` VARCHAR(45) NULL,
  `artist_id` INT NULL,
  `artist_name` VARCHAR(45) NULL,
  PRIMARY KEY (`song_id`),
  INDEX `fk_songs_album1_idx` (`album_id` ASC, `album_name` ASC) VISIBLE,
  INDEX `fk_songs_artist1_idx` (`artist_id` ASC, `artist_name` ASC) VISIBLE,
  UNIQUE INDEX `song_id_UNIQUE` (`song_id` ASC) VISIBLE,
  CONSTRAINT `fk_songs_album1`
    FOREIGN KEY (`album_id` , `album_name`)
    REFERENCES `mydb`.`album` (`album_id` , `album_name`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_songs_artist1`
    FOREIGN KEY (`artist_id` , `artist_name`)
    REFERENCES `mydb`.`artist` (`artist_id` , `artist_name`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Stop', '', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', '', '');

-- vxie123 song: Marry Had A Little Lamb https://www.true-piano-lessons.com/mary-had-a-little-lamb.html
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Marry Had A Little Lamb', 'E3 D3 C3 D3 E3 E3 E3 D3 D3 D3 E3 G4 G4 E4 D4 C4 D4 E4 E4 E4 E4 D4 D4 E4 D4 C4', '', '');

-- vxie123 song: Still Dre https://pianoletternotes.blogspot.com/2017/11/still-dre-by-dr-dre-ft-snoop-dogg.html
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Almost Dre', 'C5 E5 A5 C5 E5 A5 E5 B4 E5 A5 B4 E5 G5 E5 C5 E5 A5 C5 E5 A5 E5 B4 E5 A5 B4 E5 G5 E5 A2 E5 A5 C5 E5 B2 E5 E2 E5 A5 B5 E5 E2 E5 A2 E5 A5 C5 E5 B2 E2 E5 E2 B4 E2 E2 E2 E2 A2 E5 E5 E5 E5 E5 E5 E5 B4 B4 B4 B4 B4 B4 B4 B4 A2 C5 C5 C5 C5 C5 C5 C5 C5 B4 B4 B4 B4 B4 B4 E5 E5 E5 E5 E5 E5 E5 C5 B4 B4 B4 B4', '', '');

-- vxie123 SONG: What's Poppin https://www.youtube.com/watch?v=STQiFttDex0
INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('NOT Poppin', 'G5 A5 G5 F#5 E5 B4 F#5 G5 G5 A4 G5 A5 G5 F#5 E5 B4 F#5 G5 G5', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name)
VALUES ('Gangstas Paradise', 'C6 C6 C6 C6 C6 C6 C6 C6 B5 B5 B5 B5 C6 C6 G5', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name)
VALUES ('Clocks', 'D5 A4 g4 D5 A4 g4 D5 A4 C5 A4 f4 C5 A4 f4 C5 A4 C5 A4 f4', '', '');

INSERT INTO songs (song_title, notes, artist_name, album_name) 
VALUES ('Pumped Up Kicks', 'F2 F2 F2 G2 Ab2 Ab2 Bb2 C3 Eb3 Eb3 Eb3 C3 Bb2 Bb2 Ab2 G2', '','');