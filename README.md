******** INSTALLATION DU PROJET IONIC *********

- Installez node js
- Installez la dernière version de ionic en passant par le site officiel --> https://ionicframework.com/getting-started
- Installez l'extension chrome appellée "CORS unblock" et activez la (important pour les requêtes HTTP) --> https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
- Récupérez notre projet IONIC via Github --> https://github.com/samy682/SCH
- Installez notre base de données à l'aide du fichier sql fournit
- Récupérez notre API dans le dossier src de notre projet et placez la dans le dossier www de Wamp
- Créez un virtualhost nommé "api"
- Allez sur la racine du projet et lancez un invité de commande pour ensuite lancer la commande "ionic serve"
- Votre navigateur devrait s'ouvrir pour afficher l'application mobile


********* PASSAGE DE PARAMETRES D'UNE PAGE A L'AUTRE ************

- Pour ajouter un paramètre à une route, rendez vous sur le fichier "app-routing.module.ts"
- Ajoutez une variable dans un chemin (path) comme ceci chemin/:maVariable
- Dans votre page lors de l'appel d'une route, ajouté votre variable à votre chemin par exemple : this.navCtrl.navigateForward('/chemin/' + 25)
- Récupérez le contenu de la variable dans votre autre page ainsi : this.maVariable = this.activatedRoute.snapshot.paramMap.get('maVariable')


********* UTILISATION DES FORMULAIRES ************

- Pour récupérez une données d'un champ de formulaire, utilisé un NgModel
- Dans votre page de contrôle, ajoutez une variable exemple : membre = {
    prenom: "",
    nom: ""
  };
- Dans votre code HTML utilisez la balise form, exemple : <form (ngSubmit)="votreFonction()">
- Votre fonction sera appellée lors du clique sur le bouton submit qu'il faut ajouter : <ion-button type="submit">Connexion</ion-button>
- Dans votre code HTML, ajouter un attribut NgModel a un champ du formulaire, exemple : <ion-input type="text" [(ngModel)]="membre.prenom" name="prenom"></ion-input>
- Comme vous pouvez le constater, le NgModel doit avoit le m^me nom (membre.prenom) que votre attribut dans la classe de la page.

********* POUR LE RESTE **********

Si vous avez une question, merci de nous contacter. Le code contient beaucoup d'exemples d'utilisation des méthodes IONIC, vous devriez en avoir assez pour avancer.
Bon courage.

