<?php

class IndexController
{
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

    public function home(){}

    public function getPlongee(){
        $result = Database::getPDO()->query("SELECT plongee.id, plongee.date_heure, plongee.type_plongee, lieu_plongee.adr_commune, membre.nom, membre.prenom FROM plongee
         INNER JOIN lieu_plongee ON plongee.id_lieu = lieu_plongee.id
         INNER JOIN membre ON plongee.id_dp = membre.id WHERE plongee.date_heure < NOW()");
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

    public function putPlongee($date, $lieu, $dp, $secu, $gonfleur, $type){
        Database::getPDO()->query("INSERT INTO plongee (date_heure, id_lieu, id_dp, id_gonfleur, id_secu, id_materiel, type_plongee)
                            VALUES ($date, $lieu, $dp, $gonfleur, $secu, '1', $type)");
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
        $result = Database::getPDO()->query("SELECT membre.nom, membre.prenom FROM membre
         INNER JOIN participe ON participe.id_membre = membre.id
         INNER JOIN plongee ON participe.id_plongee = plongee.id WHERE plongee.id = ".$id);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function auth($email, $password){
        $result = Database::getPDO()->query('SELECT * FROM membre WHERE login="'.$email. '" AND password="'.$password.'"');
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function ajoutMembrePlongee($idPlongee, $idMembre){
        $result = Database::getPDO()->query('INSERT INTO participe VALUES("'. $idMembre .'", "'. $idPlongee .'", NOW())');
    }

    public function getSecu(){
        $result = Database::getPDO()->query('SELECT plongee.id, membre.prenom, membre.nom, membre.mail_redirection FROM plongee
                                            INNER JOIN membre ON plongee.id_secu = membre.id');
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function getGonfleur(){
        $result = Database::getPDO()->query('SELECT plongee.id, membre.prenom, membre.nom, membre.mail_redirection FROM plongee
                                            INNER JOIN membre ON plongee.id_gonfleur = membre.id');
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }
}