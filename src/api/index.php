<?php

require_once 'database/Database.php';
require_once 'router/Router.php';
 
new Database();

$router = new Router($_GET['url']);
header('Content-type: text/html; charset=UTF-8');

// Routes GET
$router->get('/get/materielclub','Index#getMaterielClub');
$router->get('/get/materielperso/:id','Index#getMaterielPerso');
$router->get('/get/plongee', 'Index#getPlongee');
$router->get('/get/plongee/details/:id', 'Index#getDetailPlongee');
$router->get('/get/plongee/participants/:id', 'Index#getParticipants');
$router->get('/get/auth/:email-:password', 'Index#auth');
$router->get('/get/secu/', 'Index#getSecu');
$router->get('/get/gonfleur/', 'Index#getGonfleur');
$router->get('/get/membre/niveau/dp', 'Index#getMembreNiveauDP');
$router->get('/get/membre/niveau/secu', 'Index#getMembreNiveauSecu');
$router->get('/get/membre/niveau/gonfleur', 'Index#getMembreNiveauGonfleur');
$router->get('/get/lieu', 'Index#getLieuPlongee');
$router->get('/get/membre/:id', 'Index#getMembre');
$router->get('/get/niveau/:id', 'Index#getNiveau');
$router->get('/get/plongee/participant/:id_plongee-:id_membre', 'Index#getPlongeeMembreImportant');
$router->get('/get/plongee/membre_important/:id_plongee-:id_membre', 'Index#getPlongeeParticipant');
$router->get('/put/plongee/membre/:idPlongee-:idMembre', 'Index#putMembrePlongee');
$router->get('/put/plongee/:date-:lieu-:dp-:secu-:gonfleur-:type', 'Index#putPlongee');
$router->get('/put/materielclub/:id_membre-:id_plongee-:id_materiel','Index#putMaterielClub');
$router->get('/put/materielperso/:id_membre-:id_plongee-:id_materiel','Index#putMaterielPerso');
$router->get('/get/listeReservationPerso/:id_plongee-:id_membre', 'Index#listeReservationPerso');
$router->get('/get/listeReservationClub/:id_plongee-:id_membre', 'Index#listeReservationClub');
// Router run
$router->run();

