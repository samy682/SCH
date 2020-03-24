USE sch;

TRUNCATE TABLE niveau;
INSERT INTO niveau (description) VALUES ('N1 - niveau de plongeur 1 (PE20)'),
							('N2 - niveau de plongeur 2 (PA20 + PE40)'),
							('N3 - niveau de plongeur 3 (PA60)'),
							('N4 - niveau de plongeur 4 (PA60 + encadrant PE20 + encadrant PE40)'),
							('N5 - niveau de plongeur 5 (PA60 + encadrant PE20 + encadrant PE40 + DP milieu naturel)'),
							("E1 - formateur  jusqu'à 6m"),
							("E2 - formateur jusqu'à 20m"),
							("E3 - formateur jusqu'à 40m - Moniteur"),
							("E4 - formateur jusqu'à 60m - Formateur de moniteur");

TRUNCATE TABLE membre;
INSERT INTO membre (nom, prenom, date_naissance, mail_redirection, login, password, permis_b, encadrant, rifap, gonfleur, adr_rue, adr_cp, adr_commune, licence, id_niveau)
			VALUES ('Robin', 'Jakubczak', now(), 'jakub@gg.com', 'admin', '1234', '1', '1', '1', '1', '1 rue des champs', '68720', 'Zillisheim', '1234566', '1'),
			('Sam', 'Badass', now(), 'sam@gg.com', 'samy', '1234', '1', '1', '1', '1', '1 rue des champs', '68720', 'Milouze', '1234566', '1'),
			('john', 'murphy', now(), 'john@gg.com', 'john', '1234', '1', '1', '1', '1', '1 rue des champs', '68720', 'Paris', '1234566', '1'),
			('Jojo', 'brawler', now(), 'jojo@gg.com', 'jojo', '1234', '1', '1', '1', '1', '1 rue des champs', '68720', 'Colmar', '1234566', '1'),
			('Sara', 'chroche', now(), 'sara@gg.com', 'sara', '1234', '1', '1', '1', '1', '1 rue des champs', '68720', 'Strasbourg', '1234566', '1');

TRUNCATE TABLE lieu_plongee;
INSERT INTO lieu_plongee (description, adr_rue, adr_cp, adr_commune, gps_lat, gps_long)
			VALUES ("Crête de Cassis", "rue des pins", "13000", "Cassis", "1002155,12", "5545554,25");

TRUNCATE TABLE type_materiel;
INSERT INTO type_materiel (description) 
						VALUES ("bouteilles de plongée de 6l"),
								("bouteilles de plongée de 12l"),
								("bouteilles de plongée de 15l"),
								("stabs en taille XXS"),
								("stabs en taille XS"),
								("stabs en taille S"),
								("stabs en taille M"),
								("stabs en taille L"),
								("stabs en taille XL"),
								("stabs en taille XXL"),
								("détendeurs avec embout taille enfant"),
								("détendeurs avec embout taille adulte"),
								("détendeurs eau froide avec embout taille adulte"),
								("masques"),
								("tubas"),
								("palmes de différentes tailles");

TRUNCATE TABLE materiel;
INSERT INTO materiel (id_type_materiel, id_proprietaire)
			VALUES ('1', '1'),
			('1', '2'), 
			('2', '1'), 
			('3', '1'), 
			('4', '1'), 
			('5', '1'), 
			('10', '1'), 
			('11', '1'),
			('12', '1'), 
			('13', '1'), 
			('14', '1'), 
			('15', '1'), 
			('15', '1'), 
			('16', '1'),
			('16', '3');

TRUNCATE TABLE plongee;
INSERT INTO plongee (date_heure, id_lieu, id_dp, id_gonfleur, id_secu, id_materiel, type_plongee)
			VALUES (now(), '1', '1', '2', '3', '1', 'formation'),
			(now(), '1', '1', '2', '3', '2', 'explo'),
			(now(), '1', '1', '2', '3', '3', 'explo'),
			(now(), '1', '1', '2', '3', '4', 'formation');