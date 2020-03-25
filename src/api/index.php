<?php

require_once 'database/Database.php';
require_once 'router/Router.php';

require_once 'synchronization_module/Synchronization.php';

 
new Database();

$router = new Router($_GET['url']);

// Routes GET
$router->get('/pompier', 'Pompier#getPompier');
$router->get('/', 'Index#home');
$router->get('/synchronize', 'Index#synchronize');

// Routes POST
$router->post('/pompier/authentication','Pompier#getAuthentication');
$router->post('/pompier/rights','Pompier#getRights');

// Router run
$router->run();

