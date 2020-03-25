<?php

class IndexController
{

    public function home(){}

    public function getPlongee(){
        $result = Database::getPDO()->query("SELECT * FROM plongee WHERE date_heure < NOW()");
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function getMembre(){
        $result = Database::getPDO()->query("SELECT nom, prenom, mail_redirection, id_niveau  FROM membre WHERE id = ".$_POST["id"]);
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function getNiveau(){
        $result = Database::getPDO()->query("SELECT description FROM niveau WHERE id = ".$_POST["id"]);
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

    public function getDetailPlongee($id){
        $result = Database::getPDO()->query("SELECT * FROM plongee WHERE id = ".$id);
        $obj = $result->fetchAll();
        echo json_encode($obj);
    }

}