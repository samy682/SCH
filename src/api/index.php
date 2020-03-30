<?php

require_once 'database/Database.php';
require_once 'router/Router.php';
 
new Database();

$router = new Router($_GET['url']);
header('Content-type: text/html; charset=UTF-8');


// Routes GET
$router->get('/get/plongee', 'Index#getPlongee');
$router->get('/get/plongee/details/:id', 'Index#getDetailPlongee');
$router->get('/get/plongee/participants/:id', 'Index#getParticipants');
$router->get('/get/auth/:email-:password', 'Index#auth');

// Routes POST
$router->post('/post/membre', 'Index#getMembre');
$router->post('/post/niveau', 'Index#getNiveau');


// Router run
$router->run();

