<?php

require_once(dirname(__DIR__) . "/database/Database.php");
require_once("exception/EmptyArrayKeyException.php");
require_once("exception/NoTableSpecifiedException.php");
require_once("exception/NullSelectionException.php");
require_once("exception/KeysNumberNotEqualException.php");

class Synchronization
{
    private $actionReportConn;
    private $settings = [];
    private $db_user;
    private $db_pass;
    private $db_host;
    private $db_name;
    private $db_port;

    public function __construct()
    {
        $this->settings = require('config.php');
        $this->db_user = $this->settings['db_user'];
        $this->db_pass = $this->settings['db_pass'];
        $this->db_host = $this->settings['db_host'];
        $this->db_name = $this->settings['db_name'];
        $this->db_port = $this->settings['db_port'];

        try {
            $this->actionReportConn = new PDO('mysql:host=' . $this->db_host . ';port=' . $this->db_port . ';dbname=' . $this->db_name, $this->db_user, $this->db_pass);
            $this->actionReportConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            print_r($e->getMessage());
        }
    }

    public function run(){
        $this->copyRoles();
        $this->copyFireFighters();
        $this->copyVehicles();
        $this->copyVehiclesAndRoles();
        $this->copyTypesIntervention();
    }

    private function copyRoles()
    {
        $this->copyInsert("type_participation", "role", ["TP_ID", "TP_LIBELLE"], ["Role_ID", "Name"]);
    }

    private function copyFireFighters()
    {
        $this->copyInsert("pompier", "pompier", ["P_ID", "P_PRENOM", "P_NOM"], ["Pompier_ID", "Prenom", "Nom"]);
    }

    private function copyVehicles()
    {
        $this->copyInsert("type_vehicule", "vehicule", ["TV_CODE", "TV_LIBELLE", "TV_NB"], ["Vehicule_Code", "Description", "NbPlaces_Dispo"]);
    }

    private function copyVehiclesAndRoles(){
        $this->copyInsert("type_vehicule_role", "vehicule_role", ["TV_CODE", "ROLE_ID", "ROLE_NAME"], ["Vehicule_Code", "Role_ID", "Role_Nom"]);
    }

    private function copyTypesIntervention(){
        $this->copyInsert("type_intervention", "type_intervention", ["TI_CODE", "TI_DESCRIPTION"], ["TI_Code", "Description"]);
    }

    private function copyInsert($sourceTable, $destinationTable, $sourceKeys, $destinationKeys)
    {
        $sourceKeysSize = sizeof($sourceKeys);
        $destKeysSize = sizeof($destinationKeys);
        if ($sourceKeysSize < 1 || $destKeysSize < 1)
            throw new EmptyArrayKeyException('No key specified in source or destination keys array');

        if ($sourceTable == "" || $destinationTable == "")
            throw new NoTableSpecifiedException('No destination or source table specified');

        if ($sourceKeysSize != $destKeysSize)
            throw new KeysNumberNotEqualException('Number of keys in both keys array are not equal');

        $this->actionReportConn->query("DELETE FROM ".$destinationTable);

        $sql ='SELECT ' . $sourceKeys[0];
        for ($i = 1; $i < $sourceKeysSize; $i++) {
            $sql = $sql . ',' . $sourceKeys[$i];
        }
        $sql = $sql . ' FROM ' . $sourceTable;
        $result = Database::getPDO()->query($sql);
        $results = $result->fetchAll();

        if (sizeof($results) < 1)
            throw new NullSelectionException("Result of the request is null, no data to copy");

        $sql = 'INSERT INTO ' . $destinationTable . ' (' . $destinationKeys[0];
        for ($i = 1; $i < $destKeysSize; $i++) {
            $sql = $sql .", ". $destinationKeys[$i];
        }
        $sql = $sql. ') VALUES ';

        for($i = 0; $i < sizeof($results); $i++){
            $sql = $sql. '(';
            for($y = 0; $y < $sourceKeysSize; $y++){
                $sql = $sql.'"'. $results[$i][$sourceKeys[$y]]. '"';

                if(!($y == $sourceKeysSize - 1))
                    $sql = $sql. ', ';
            }
            $sql = $sql. ')';

            if($i == sizeof($results) - 1)
                $sql = $sql. ';';
            else
                $sql = $sql. ', ';
        }

        $this->actionReportConn->query($sql);
    }
}