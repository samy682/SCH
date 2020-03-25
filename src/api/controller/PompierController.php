<?php


class PompierController
{
    public function getPompier(){
        $query = "SELECT P_PRENOM, P_NOM, P_EMAIL FROM pompier";
        $result = Database::getPDO()->query($query);
        $json = json_encode($result->fetchAll());
        echo $json;
    }

	
	public function getAuthentication()
	{
		$pass = md5($_POST["pass"]);
		$query = 'SELECT P_ID, P_PRENOM, P_NOM, P_MDP,P_EMAIL FROM pompier WHERE pompier.P_EMAIL = "'. htmlspecialchars($_POST["email"]) . '" AND pompier.P_MDP = "' .$pass. '"';
        $result = Database::getPDO()->query($query);
        $json = json_encode($result->fetch(), true);
        echo $json;
	}

    public function getRights(){
        $email = htmlspecialchars($_POST["email"]);
        $query = 'SELECT F.F_ID, F.F_LIBELLE FROM pompier AS P INNER JOIN habilitation AS H ON H.GP_ID = P.GP_ID INNER JOIN fonctionnalite AS F ON F.F_ID = H.F_ID WHERE P.P_EMAIL = "'. $email .'"';
        $result = Database::getPDO()->query($query);
        $json = $result->fetchAll();
        echo json_encode(self::convert_from_latin1_to_utf8_recursively($json));

    }

    private static function convert_from_latin1_to_utf8_recursively($dat)
    {
        if (is_string($dat)) {
            return utf8_encode($dat);
        } elseif (is_array($dat)) {
            $ret = [];
            foreach ($dat as $i => $d) $ret[ $i ] = self::convert_from_latin1_to_utf8_recursively($d);

            return $ret;
        } elseif (is_object($dat)) {
            foreach ($dat as $i => $d) $dat->$i = self::convert_from_latin1_to_utf8_recursively($d);

            return $dat;
        } else {
            return $dat;
        }
    }
}