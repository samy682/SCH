DROP DATABASE IF EXISTS sch;
CREATE DATABASE sch character set UTF8 collate utf8_bin;

USE sch;


CREATE TABLE `membre` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) NOT NULL,
  `date_naissance` date NOT NULL,
  `mail_redirection` varchar(128),
  `login` varchar(128),
  `password` varchar(255),
  `permis_b` boolean NOT NULL DEFAULT false,
  `encadrant` boolean NOT NULL DEFAULT false,
  `rifap` boolean NOT NULL DEFAULT false,
  `gonfleur` boolean NOT NULL DEFAULT false,
  `adr_rue` varchar(128),
  `adr_cp` varchar(8),
  `adr_commune` varchar(64),
  `licence` varchar(12),
  `id_niveau` int
);

CREATE TABLE `saison` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(16),
  `date_debut` date,
  `date_fin` date
);

CREATE TABLE `est_membre` (
  `id_membre` int,
  `id_saison` int,
  `club_date_inscription` date DEFAULT (now()),
  `licence_date_inscription` date,
  `licence_date_fin_validite` date,
  `en_formation` boolean DEFAULT false
);

CREATE TABLE `niveau` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(128)
);

CREATE TABLE `certificat` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_membre` int,
  `date_delivrance` date NOT NULL DEFAULT (now()),
  `date_echeance` date NOT NULL,
  `scan` blob
);

CREATE TABLE `lieu_plongee` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(16),
  `adr_rue` varchar(128),
  `adr_cp` varchar(8),
  `adr_commune` varchar(64),
  `gps_lat` float,
  `gps_long` float
);

CREATE TABLE `plongee` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `date_heure` datetime NOT NULL,
  `id_lieu` int NOT NULL,
  `id_dp` int NOT NULL,
  `id_gonfleur` int,
  `id_secu` int,
  `id_materiel` int,
  `type_plongee` ENUM ('explo', 'formation')
);

CREATE TABLE `participe` (
  `id_membre` int NOT NULL,
  `id_plongee` int NOT NULL,
  `date_inscription` datetime
);

CREATE TABLE `reserve` (
  `id_membre` int NOT NULL,
  `id_plongee` int NOT NULL,
  `id_materiel` int NOT NULL
);

CREATE TABLE `type_materiel` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` ENUM ('bloc', 'stab', 'detendeur')
);

CREATE TABLE `materiel` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_type_materiel` int,
  `id_proprietaire` int
);

ALTER TABLE `membre` ADD FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id`);

ALTER TABLE `est_membre` ADD FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id`);

ALTER TABLE `est_membre` ADD FOREIGN KEY (`id_saison`) REFERENCES `saison` (`id`);

ALTER TABLE `certificat` ADD FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id`);

ALTER TABLE `plongee` ADD FOREIGN KEY (`id_lieu`) REFERENCES `lieu_plongee` (`id`);

ALTER TABLE `plongee` ADD FOREIGN KEY (`id_dp`) REFERENCES `membre` (`id`);

ALTER TABLE `plongee` ADD FOREIGN KEY (`id_gonfleur`) REFERENCES `membre` (`id`);

ALTER TABLE `plongee` ADD FOREIGN KEY (`id_secu`) REFERENCES `membre` (`id`);

ALTER TABLE `plongee` ADD FOREIGN KEY (`id_materiel`) REFERENCES `membre` (`id`);

ALTER TABLE `participe` ADD FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id`);

ALTER TABLE `participe` ADD FOREIGN KEY (`id_plongee`) REFERENCES `plongee` (`id`);

ALTER TABLE `reserve` ADD FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id`);

ALTER TABLE `reserve` ADD FOREIGN KEY (`id_plongee`) REFERENCES `plongee` (`id`);

ALTER TABLE `reserve` ADD FOREIGN KEY (`id_materiel`) REFERENCES `materiel` (`id`);

ALTER TABLE `materiel` ADD FOREIGN KEY (`id_type_materiel`) REFERENCES `type_materiel` (`id`);

ALTER TABLE `materiel` ADD FOREIGN KEY (`id_proprietaire`) REFERENCES `membre` (`id`);
