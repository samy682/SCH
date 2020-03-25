<?php

require_once dirname(__DIR__). '/synchronization_module/Synchronization.php';

class IndexController
{

    public function home(){}

    public function synchronize(){
        // Synchronization
        $synch = new Synchronization();
        $synch->run();
    }
}