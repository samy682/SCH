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
$router->get('/get/plongee/membre/:idPlongee-:idMembre', 'Index#ajoutMembrePlongee');
$router->get('/get/secu/', 'Index#getSecu');
$router->get('/get/gonfleur/', 'Index#getGonfleur');
$router->get('/get/membre/niveau/dp', 'Index#getMembreNiveauDP');
$router->get('/get/membre/niveau/secu', 'Index#getMembreNiveauSecu');
$router->get('/get/membre/niveau/gonfleur', 'Index#getMembreNiveauGonfleur');
$router->get('/get/lieu', 'Index#getLieuPlongee');
$router->get('/get/membre/:id', 'Index#getMembre');
$router->get('/get/niveau/:id', 'Index#getNiveau');
$router->get('/put/:date-:lieu-:dp-:secu-:gonfleur-:type', 'Index#addPlongee');

// Router run
$router->run();

