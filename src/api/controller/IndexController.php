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

    public function getMembre(){
        $result = Database::getPDO()->query("SELECT nom, prenom, mail_redirection, id_niveau  FROM membre WHERE id = ".$_POST["id"]);
        $obj = $result->fetchAll();
        $this->utf8_encode_deep($obj);
        echo json_encode($obj);
    }

    public function getNiveau(){
        $result = Database::getPDO()->query("SELECT description FROM niveau WHERE id = ".$_POST["id"]);
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
}