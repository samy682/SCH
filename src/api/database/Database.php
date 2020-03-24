<?php


class Database
{

    /**
     * @var stores the connection to the PDO type database
     */
    private $settings =[];
    private static $db_user;
    private static $db_pass;
    private static $db_host;
    private static $db_name;
    private static $db_port;
    private static $pdo;


    /**
     * Database constructor.
     */
    public function __construct()
    {
        $this->settings = require('config.php');
        self::$db_user = $this->settings['db_user'];
        self::$db_pass = $this->settings['db_pass'];
        self::$db_host = $this->settings['db_host'];
        self::$db_name = $this->settings['db_name'];
        self::$db_port = $this->settings['db_port'];
    }

    public static function getPDO(){
        if(is_null(self::$pdo)) {
            try {
                self::$pdo = new PDO("mysql:host=". self::$db_host .";port=". self::$db_port .";dbname=". self::$db_name, self::$db_user, self::$db_pass);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (Exception $e){
                print_r($e->getMessage());
            }
        }

        return self::$pdo;
    }
}