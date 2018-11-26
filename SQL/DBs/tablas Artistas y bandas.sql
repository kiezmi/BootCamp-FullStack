CREATE SCHEMA IF NOT EXISTS bootcamp_vlc;
USE bootcamp_vlc;

CREATE TABLE IF NOT EXISTS bands (
    band_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    band_name VARCHAR(100)  COLLATE latin1_spanish_ci NOT NULL,
    band_type VARCHAR(100)  COLLATE latin1_spanish_ci NOT NULL
);
CREATE TABLE IF NOT EXISTS artists (
    artist_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(100) COLLATE latin1_spanish_ci NOT NULL,
    band_id INT(11) DEFAULT NULL,
    KEY bands_fk_1(band_id),
    FOREIGN KEY(band_id) REFERENCES bands(band_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

INSERT INTO artists (artist_name)VALUES ('Kiezmi'),('Juan');
INSERT INTO bands VALUES (DEFAULT,'GeeksHubs','Rock');
UPDATE artists SET band_id=(SELECT band_id FROM bands WHERE band_name='GeeksHubs') WHERE artist_id=2;
DELETE FROM bands;