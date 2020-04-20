<?php

class IndexController
{
    public function home(){}

    public function putMembrePlongee($idPlongee, $idMembre){
        $result = Database::getPDO()->query('INSERT INTO participe VALUES("'. $idMembre .'", "'. $idPlongee .'", NOW())');
    }

    public function putPlongee($date, $lieu, $dp, $secu, $gonfleur, $type){
        $sql = "INSERT INTO plongee (date_heure, id_lieu, id_dp, id_gonfleur, id_secu, type_plongee)
                            VALUES ('".$date."', '".$lieu."', '".$dp."', '".$gonfleur."', '".$secu."', '".$type."')";
        Database::getPDO()->query($sql);

        $result = Database::getPDO()->query("SELECT id from plongee ORDER BY id DESC LIMIT 1");
        $result = $result->fetch();
        $id_plongee = $result[0];

        $sql = "INSERT INTO participe (id_plongee, id_membre, date_inscription)
                            VALUES ('". $id_plongee ."', '". $dp ."', NOW()),
                                ('". $id_plongee ."', '". $secu ."', NOW()),
                                ('". $id_plongee ."', '". $gonfleur ."', NOW())";

        Database::getPDO()->query($sql);
        echo '[{"result":"true"}]';

    }

    public function getPlongee(){
        $result = Database::getPDO()->query("SELECT plongee.id, plongee.date_heure, plongee.type_plongee, lieu_plongee.adr_commune, membre.nom, membre.prenom FROM plongee
         INNER JOIN lieu_plongee ON plongee.id_lieu = lieu_plongee.id
         INNER JOIN membre ON plongee.id_dp = membre.id WHERE plongee.date_heure >= CURDATE()");
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getMembre($id){
        $result = Database::getPDO()->query("SELECT nom, prenom, mail_redirection, id_niveau  FROM membre WHERE id = ".$id);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getMembreNiveauDP(){
        $result = Database::getPDO()->query("SELECT id, nom, prenom  FROM membre WHERE encadrant = 1");
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getMembreNiveauSecu(){
        $result = Database::getPDO()->query("SELECT id, nom, prenom  FROM membre WHERE rifap = 1");
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getMembreNiveauGonfleur(){
        $result = Database::getPDO()->query("SELECT id, nom, prenom  FROM membre WHERE gonfleur = 1");
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getLieuPlongee(){
        $result = Database::getPDO()->query("SELECT id, description, adr_rue, adr_cp, adr_commune  FROM lieu_plongee");
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getNiveau($id){
        $result = Database::getPDO()->query("SELECT description FROM niveau WHERE id = ".$id);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getDetailPlongee($id){
        $result = Database::getPDO()->query("SELECT plongee.id, plongee.date_heure, plongee.type_plongee, lieu_plongee.adr_commune, membre.nom, membre.prenom FROM plongee
         INNER JOIN lieu_plongee ON plongee.id_lieu = lieu_plongee.id
         INNER JOIN membre ON plongee.id_dp = membre.id WHERE plongee.id = ".$id);
        $obj = $result->fetch();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getParticipants($id){
        $result = Database::getPDO()->query("SELECT membre.nom, membre.prenom, membre.id FROM membre
         INNER JOIN participe ON participe.id_membre = membre.id
         INNER JOIN plongee ON participe.id_plongee = plongee.id WHERE plongee.id = ".$id);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function auth($email, $password){
        $result = Database::getPDO()->query('SELECT * FROM membre WHERE login="'.$email. '" AND password="'.$password.'"');
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getSecu(){
        $result = Database::getPDO()->query('SELECT plongee.id, membre.prenom, membre.nom, membre.mail_redirection FROM plongee
                                            INNER JOIN membre ON plongee.id_secu = membre.id');
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getGonfleur(){
        $result = Database::getPDO()->query('SELECT plongee.id, membre.prenom, membre.nom, membre.mail_redirection FROM plongee
                                            INNER JOIN membre ON plongee.id_gonfleur = membre.id');
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getPlongeeParticipant($id_plongee, $id_membre){
        $result = Database::getPDO()->query('SELECT plongee.id FROM participe
                                            INNER JOIN plongee ON plongee.id = participe.id_plongee
                                            WHERE (participe.id_membre = '. $id_membre .' AND participe.id_plongee = '. $id_plongee .')');
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function getMaterielClub()
    {
        $result = Database::getPDO()->query('SELECT * FROM materielclub INNER JOIN type_materiel 
                                            ON type_materiel.id = materielclub.id_type_materiel');
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getMaterielPerso($id)
    {
        $result = Database::getPDO()->query('SELECT * FROM materielperso INNER JOIN type_materiel 
                                            ON type_materiel.id = materielperso.id_type_materiel
                                            WHERE id_proprietaire='.$id);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function putMaterielClub($id_membre, $id_plongee , $id_materiel)
    {
        $result = Database::getPDO()->query('INSERT INTO reserveclub VALUES("'. $id_membre .'", "'. $id_plongee .'", "'. $id_materiel .'")');
        echo '[{"result":"true"}]';
    }

    public function putMaterielPerso($id_membre, $id_plongee , $id_materiel)
    {
        $result = Database::getPDO()->query('INSERT INTO reserveperso VALUES("'. $id_membre .'", "'. $id_plongee .'", "'. $id_materiel .'")');
        echo '[{"result":"true"}]';
    }


    public function utf8_encode_deep(&$input) {
        if (is_string($input)) {
            $input = utf8_encode($input);
        } else if (is_array($input)) {
            foreach ($input as &$value) {
                $this->utf8_encode_deep($value);
            }

            unset($value);
        } else if (is_object($input)) {
            $vars = array_keys(get_object_vars($input));

            foreach ($vars as $var) {
                $this->utf8_encode_deep($input->$var);
            }
        }
    }


    public function listeReservationPerso($id_plongee, $id_membre)
    {
        
        $result = Database::getPDO()->query('SELECT reserveperso.id_membre,reserveperso.id_plongee, reserveperso.id_materiel, type_materiel.description, membre.nom,membre.prenom  FROM 					reserveperso INNER JOIN type_materiel 
        ON type_materiel.id = reserveperso.id_materiel
	INNER JOIN membre ON membre.id = reserveperso.id_membre
        WHERE reserveperso.id_plongee='.$id_plongee. ' AND reserveperso.id_membre = '.$id_membre);
            $obj = $result->fetchAll();
            $this->utf8_encode_deep($obj);
            echo json_encode($obj);
    }

    public function listeReservationClub($id_plongee, $id_membre)
    {
        
        $result = Database::getPDO()->query('SELECT reserveclub.id_membre,reserveclub.id_plongee, reserveclub.id_typemateriel, type_materiel.description, membre.nom,membre.prenom  FROM 		reserveclub INNER JOIN type_materiel 
        ON type_materiel.id = reserveclub.id_typemateriel
	    INNER JOIN membre ON membre.id = reserveclub.id_membre
        WHERE reserveclub.id_plongee='.$id_plongee. ' AND reserveclub.id_membre = '.$id_membre);
            $obj = $result->fetchAll();
            $this->utf8_encode_deep($obj);
            echo json_encode($obj);
    }
}