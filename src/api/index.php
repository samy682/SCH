<?php

require_once 'database/Database.php';
require_once 'router/Router.php';
 
new Database();

$router = new Router($_GET['url']);

// Routes GET
$router->get('/get/plongee', 'Index#getPlongee');


// Routes POST
$router->post('/post/membre', 'Index#getMembre');
$router->post('/post/niveau', 'Index#getNiveau');

// Router run
$router->run();

