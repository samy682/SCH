-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 27 avr. 2020 à 09:52
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sch`
--

-- --------------------------------------------------------

--
-- Structure de la table `certificat`
--

DROP TABLE IF EXISTS `certificat`;
CREATE TABLE IF NOT EXISTS `certificat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_membre` int(11) DEFAULT NULL,
  `date_delivrance` date NOT NULL DEFAULT current_timestamp(),
  `date_echeance` date NOT NULL,
  `scan` blob DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_membre` (`id_membre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `est_membre`
--

DROP TABLE IF EXISTS `est_membre`;
CREATE TABLE IF NOT EXISTS `est_membre` (
  `id_membre` int(11) DEFAULT NULL,
  `id_saison` int(11) DEFAULT NULL,
  `club_date_inscription` date DEFAULT current_timestamp(),
  `licence_date_inscription` date DEFAULT NULL,
  `licence_date_fin_validite` date DEFAULT NULL,
  `en_formation` tinyint(1) DEFAULT 0,
  KEY `id_membre` (`id_membre`),
  KEY `id_saison` (`id_saison`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `lieu_plongee`
--

DROP TABLE IF EXISTS `lieu_plongee`;
CREATE TABLE IF NOT EXISTS `lieu_plongee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(16) DEFAULT NULL,
  `adr_rue` varchar(128) DEFAULT NULL,
  `adr_cp` varchar(8) DEFAULT NULL,
  `adr_commune` varchar(64) DEFAULT NULL,
  `gps_lat` float DEFAULT NULL,
  `gps_long` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `lieu_plongee`
--

INSERT INTO `lieu_plongee` (`id`, `description`, `adr_rue`, `adr_cp`, `adr_commune`, `gps_lat`, `gps_long`) VALUES
(1, 'Crête de Cassis', 'rue des pins', '13000', 'Cassis', 1002160, 5545550),
(2, 'Beinheim', 'Les Chalets du Lac', '67930', 'Beinheim', 48.8474, 8.10031),
(3, 'GDF', 'La Gravière du Fort - D222', '67810', 'Holtzheim', 48.5563, 7.66515);

-- --------------------------------------------------------

--
-- Structure de la table `materielclub`
--

DROP TABLE IF EXISTS `materielclub`;
CREATE TABLE IF NOT EXISTS `materielclub` (
  `id` int(11) NOT NULL,
  `id_type_materiel` int(11) DEFAULT NULL,
  `marque` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `noserie` varchar(12) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `materielclub`
--

INSERT INTO `materielclub` (`id`, `id_type_materiel`, `marque`, `noserie`) VALUES
(1, 1, 'Aqualung', '123'),
(3, 2, 'Faber', '123'),
(4, 3, 'Roth', '12L n°1'),
(5, 3, 'Roth', '12L n°2'),
(6, 3, 'Roth', '12L n°3'),
(7, 3, 'Roth', '12L n°4'),
(8, 3, 'Roth', '12L n°5'),
(9, 3, 'Roth', '12L n°6'),
(10, 3, 'Roth', '12L n°7'),
(11, 3, 'Roth', '12L n°8'),
(12, 3, 'Roth', '12L n°9'),
(13, 3, 'Roth', '12L n°10'),
(14, 3, 'Roth', '12L n°11'),
(15, 3, 'Roth', '12L n°12'),
(16, 3, 'Roth', '12L n°13'),
(17, 3, 'Roth', '12L n°14'),
(18, 4, 'Roth', '15L'),
(22, 13, 'Aqualung', 'Core n°1'),
(23, 13, 'Aqualung', 'Core n°2'),
(24, 13, 'Aqualung', 'Core n°3'),
(25, 13, 'Aqualung', 'Core n°4'),
(26, 12, 'Scubapro', 'MK2 n°1'),
(27, 12, 'Scubapro', 'MK2 n°2'),
(28, 12, 'Scubapro', 'MK2 n°3'),
(29, 12, 'Scubapro', 'MK2 n°4'),
(30, 12, 'Scubapro', 'MK2 n°5'),
(31, 12, 'Scubapro', 'MK2 n°6'),
(32, 12, 'Scubapro', 'MK2 n°7'),
(33, 12, 'Scubapro', 'MK2 n°8'),
(34, 12, 'Scubapro', 'MK2 n°9'),
(35, 12, 'Scubapro', 'MK2 n°10');

-- --------------------------------------------------------

--
-- Structure de la table `materielperso`
--

DROP TABLE IF EXISTS `materielperso`;
CREATE TABLE IF NOT EXISTS `materielperso` (
  `id` int(11) NOT NULL,
  `id_type_materiel` int(11) DEFAULT NULL,
  `id_proprietaire` int(11) DEFAULT NULL,
  `marque` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `noserie` varchar(12) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `materielperso`
--

INSERT INTO `materielperso` (`id`, `id_type_materiel`, `id_proprietaire`, `marque`, `noserie`) VALUES
(1, 3, 7, 'Roth', '12L jheinis'),
(2, 4, 7, 'Aqualung', '15L jheinis'),
(3, 4, 6, 'Roth', '15L mbeyer');

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

DROP TABLE IF EXISTS `membre`;
CREATE TABLE IF NOT EXISTS `membre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) NOT NULL,
  `date_naissance` date NOT NULL,
  `mail_redirection` varchar(128) DEFAULT NULL,
  `login` varchar(128) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permis_b` tinyint(1) NOT NULL DEFAULT 0,
  `encadrant` tinyint(1) NOT NULL DEFAULT 0,
  `rifap` tinyint(1) NOT NULL DEFAULT 0,
  `gonfleur` tinyint(1) NOT NULL DEFAULT 0,
  `adr_rue` varchar(128) DEFAULT NULL,
  `adr_cp` varchar(8) DEFAULT NULL,
  `adr_commune` varchar(64) DEFAULT NULL,
  `licence` varchar(12) DEFAULT NULL,
  `id_niveau` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_niveau` (`id_niveau`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`id`, `nom`, `prenom`, `date_naissance`, `mail_redirection`, `login`, `password`, `permis_b`, `encadrant`, `rifap`, `gonfleur`, `adr_rue`, `adr_cp`, `adr_commune`, `licence`, `id_niveau`) VALUES
(6, 'BEYER', 'Marc', '1976-01-11', 'marc.beyer@sch.club', 'marc.beyer', '123456', 1, 1, 1, 1, NULL, NULL, NULL, 'A-07-328228', 8),
(7, 'HEINIS', 'Joël', '1972-01-22', 'joel.heinis@sch.club', 'joel.heinis', '123456', 1, 1, 1, 1, NULL, NULL, NULL, 'A-11-539295', 4),
(8, 'SCH', '-', '2001-01-01', 'admin@sch.club', 'admin', '123456', 0, 0, 0, 0, NULL, NULL, NULL, NULL, 5);

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
CREATE TABLE IF NOT EXISTS `niveau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`id`, `description`) VALUES
(1, 'N1 - niveau de plongeur 1 (PE20)'),
(2, 'N2 - niveau de plongeur 2 (PA20 + PE40)'),
(3, 'N3 - niveau de plongeur 3 (PA60)'),
(4, 'N4 - niveau de plongeur 4 (PA60 + encadrant PE20 + encadrant PE40)'),
(5, 'N5 - niveau de plongeur 5 (PA60 + encadrant PE20 + encadrant PE40 + DP milieu naturel)'),
(6, 'E1 - formateur  jusqu\'à 6m'),
(7, 'E2 - formateur jusqu\'à 20m'),
(8, 'E3 - formateur jusqu\'à 40m - Moniteur'),
(9, 'E4 - formateur jusqu\'à 60m - Formateur de moniteur');

-- --------------------------------------------------------

--
-- Structure de la table `participe`
--

DROP TABLE IF EXISTS `participe`;
CREATE TABLE IF NOT EXISTS `participe` (
  `id_membre` int(11) NOT NULL,
  `id_plongee` int(11) NOT NULL,
  `date_inscription` datetime DEFAULT NULL,
  KEY `id_membre` (`id_membre`),
  KEY `id_plongee` (`id_plongee`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `participe`
--

INSERT INTO `participe` (`id_membre`, `id_plongee`, `date_inscription`) VALUES
(1, 1, '2020-03-10 00:00:00'),
(2, 1, '2020-03-10 00:00:00'),
(2, 1, '2020-03-30 15:11:21'),
(2, 1, '2020-03-30 15:11:35'),
(2, 1, '2020-03-30 15:12:08'),
(1, 1, '2020-04-01 15:03:42'),
(1, 1, '2020-04-01 15:05:28'),
(1, 1, '2020-04-01 15:05:44'),
(1, 1, '2020-04-13 11:10:56'),
(1, 1, '2020-04-13 11:25:23'),
(3, 2, '2020-04-13 11:27:46'),
(1, 8, '2020-04-13 11:28:59'),
(1, 17, NULL),
(2, 17, NULL),
(3, 17, NULL),
(1, 18, '2020-04-13 12:18:38'),
(2, 18, '2020-04-13 12:18:38'),
(3, 18, '2020-04-13 12:18:38'),
(1, 2, '2020-04-13 12:21:18'),
(1, 19, '2020-04-15 11:34:09'),
(4, 19, '2020-04-15 11:34:09'),
(2, 19, '2020-04-15 11:34:09'),
(1, 20, '2020-04-15 11:34:43'),
(4, 20, '2020-04-15 11:34:43'),
(2, 20, '2020-04-15 11:34:43'),
(1, 21, '2020-04-15 11:38:29'),
(4, 21, '2020-04-15 11:38:29'),
(5, 21, '2020-04-15 11:38:29'),
(3, 22, '2020-04-15 11:46:03'),
(1, 22, '2020-04-15 11:46:03'),
(5, 22, '2020-04-15 11:46:03'),
(1, 23, '2020-04-15 11:47:31'),
(2, 23, '2020-04-15 11:47:31'),
(3, 23, '2020-04-15 11:47:31'),
(4, 24, '2020-04-15 11:48:08'),
(5, 24, '2020-04-15 11:48:08'),
(2, 24, '2020-04-15 11:48:08'),
(3, 25, '2020-04-15 11:48:56'),
(2, 25, '2020-04-15 11:48:56'),
(1, 25, '2020-04-15 11:48:56'),
(2, 26, '2020-04-15 11:49:47'),
(5, 26, '2020-04-15 11:49:47'),
(3, 26, '2020-04-15 11:49:47'),
(3, 27, '2020-04-15 11:51:24'),
(5, 27, '2020-04-15 11:51:24'),
(2, 27, '2020-04-15 11:51:24'),
(3, 28, '2020-04-15 11:54:00'),
(1, 28, '2020-04-15 11:54:00'),
(4, 28, '2020-04-15 11:54:00'),
(6, 29, '2020-04-16 11:41:54'),
(6, 29, '2020-04-16 11:41:54'),
(7, 29, '2020-04-16 11:41:54'),
(8, 29, '2020-04-16 11:42:56'),
(6, 30, '2020-04-16 12:06:58'),
(7, 30, '2020-04-16 12:06:58'),
(7, 30, '2020-04-16 12:06:58'),
(8, 30, '2020-04-16 12:07:06'),
(6, 31, '2020-04-19 11:47:04'),
(7, 31, '2020-04-19 11:47:04'),
(7, 31, '2020-04-19 11:47:04');

-- --------------------------------------------------------

--
-- Structure de la table `plongee`
--

DROP TABLE IF EXISTS `plongee`;
CREATE TABLE IF NOT EXISTS `plongee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_heure` date NOT NULL,
  `id_lieu` int(11) NOT NULL,
  `id_dp` int(11) NOT NULL,
  `id_gonfleur` int(11) DEFAULT NULL,
  `id_secu` int(11) DEFAULT NULL,
  `type_plongee` enum('explo','formation') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_lieu` (`id_lieu`),
  KEY `id_dp` (`id_dp`),
  KEY `id_gonfleur` (`id_gonfleur`),
  KEY `id_secu` (`id_secu`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `plongee`
--

INSERT INTO `plongee` (`id`, `date_heure`, `id_lieu`, `id_dp`, `id_gonfleur`, `id_secu`, `type_plongee`) VALUES
(28, '2020-04-16', 1, 3, 4, 1, 'explo'),
(27, '2020-04-17', 1, 3, 2, 5, 'formation'),
(26, '2020-04-16', 1, 2, 3, 5, 'explo'),
(29, '2020-04-16', 1, 6, 7, 6, 'explo'),
(30, '2020-04-17', 1, 6, 7, 7, 'explo'),
(31, '2020-04-30', 2, 6, 7, 7, 'explo');

-- --------------------------------------------------------

--
-- Structure de la table `reserveclub`
--

DROP TABLE IF EXISTS `reserveclub`;
CREATE TABLE IF NOT EXISTS `reserveclub` (
  `id_membre` int(11) NOT NULL,
  `id_plongee` int(11) NOT NULL,
  `id_typemateriel` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `reserveclub`
--

INSERT INTO `reserveclub` (`id_membre`, `id_plongee`, `id_typemateriel`) VALUES
(7, 31, 12),
(7, 31, 3),
(7, 31, 4),
(7, 31, 5),
(7, 31, 6),
(7, 31, 1),
(6, 31, 1),
(6, 31, 3),
(6, 31, 4);

-- --------------------------------------------------------

--
-- Structure de la table `reserveperso`
--

DROP TABLE IF EXISTS `reserveperso`;
CREATE TABLE IF NOT EXISTS `reserveperso` (
  `id_membre` int(11) NOT NULL,
  `id_plongee` int(11) NOT NULL,
  `id_materiel` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `reserveperso`
--

INSERT INTO `reserveperso` (`id_membre`, `id_plongee`, `id_materiel`) VALUES
(7, 31, 2),
(7, 31, 1),
(6, 31, 3);

-- --------------------------------------------------------

--
-- Structure de la table `saison`
--

DROP TABLE IF EXISTS `saison`;
CREATE TABLE IF NOT EXISTS `saison` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(16) DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `type_materiel`
--

DROP TABLE IF EXISTS `type_materiel`;
CREATE TABLE IF NOT EXISTS `type_materiel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` enum('bloc','stab','detendeur') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `type_materiel`
--

INSERT INTO `type_materiel` (`id`, `description`) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, ''),
(8, ''),
(9, ''),
(10, ''),
(11, ''),
(12, 'detendeur'),
(13, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
