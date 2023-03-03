## FRANCAIS

Présentation du cours

Installer les outils de développement

Créer une application angulaire

  Créer le dossier du projet
  Installateur @angular/cli
  Créer une application en tant qu'interface
Ajouter un en-tête

  Générer un composant
  Ajouter HTML
  Ajouter CSS
Liste des aliments

  Créer un modèle alimentaire
  Créer data.ts
    Ajouter des échantillons d'aliments
Ajouter des images aux ressources
Créer un service alimentaire
Créer un composant Accueil
  Ajouter ts
  Ajouter du HTML
  Ajouter CSS
Chercher

  Ajouter une méthode au service alimentaire
  Ajouter un itinéraire de recherche
  Afficher le résultat de la recherche dans le composant Accueil
  Générer un composant de recherche
    Ajouter au composant d'accueil
    Ajouter ts
    Ajouter du HTML
    Ajouter CSS
Barre de balises

  Créer un modèle de balise
  Ajouter des exemples de balises à data.ts
  Service alimentaire
    Ajouter la méthode d'obtention de toutes les balises
    Ajouter tous les aliments par méthode d'étiquette
Ajouter un itinéraire de balises
Afficher le résultat de la balise dans le composant Accueil
Composant Générer des balises
  Ajouter au composant d'accueil
  Ajouter ts
  Ajouter du HTML
  Ajouter CSS
Nourriture

  Ajouter de la méthode au service alimentaire
  Composant Générer une page d'aliments
    Ajouter un itinéraire
    Ajouter ts
    Ajouter du HTML
    Ajouter CSS
Page du panier

  Créer un modèle CartItem
  Créer un modèle de panier
  Service de génération de panier
  Bouton Ajouter au panier dans la page des aliments
  Composant de page Générer le panier
    Ajouter un itinéraire
    Ajouter ts
    Ajouter du HTML
    Ajouter CSS
Pas trouvé !

  Générer un composant
    Ajouter ts
    Ajouter du HTML
    Ajouter CSS
  Ajouter aux pages
    Page d'accueil
    Nourriture
    Page du panier

## Back-end

Se connecter au back-end

  Créer un dossier principal
  initialisation npm
  npm installer le script dactylographié
  Créer tsconfig.json
  Créer .gitignore
  Copiez data.ts dans le backend/src
  npm installer cors express
  Créer un serveur.ts
    installer @types
    Ajouter des API
  npm installer nodemon ts-node --save-dev
  Ajouter urs.ts à l'interface
  Ajouter le module HttpClient
  Mettre à jour le service alimentaire
Page de connexion

  Générer un composant

    Ajouter aux itinéraires
    Ajouter ts
    Ajouter du HTML
      Module d'importation de formulaires réactifs
    Ajouter du CSS
  Ajouter une API de connexion

    Utiliser json
    Ajouter jsonwebtoken
    Tester avec Postman
  Générer un service utilisateur

    Générer un modèle utilisateur
    Ajouter un sujet utilisateur
    Ajouter une méthode de connexion
      Ajouter des URL d'utilisateur
      Générer l'interface IUserLogin
      Ajouter ngx-toastr
        Module d'importation
        Importer le navigateurAnimationsModule
        Ajouter des styles dans angular.json
      Ajouter à l'en-tête
    Ajouter des méthodes de stockage local
    Ajouter une méthode de déconnexion
      Ajouter à l'en-tête
Créer des composants pour la page de connexion

  Conteneur d'entrée
  Validation des entrées
  Saisie de texte
  Bouton par défaut
Connecter l'API de connexion à MongoDB Atlas

  Déplacer des API dans des routeurs
  Créer un atlas MongoDB
  Créer un fichier .env
  Installer
    mangouste
    dotenv
    bcryptjs
    gestionnaire express-asynchrone
  Connectez-vous à l'Atlas MongoDB
  Utilisez MongoDB au lieu de data.ts dans apis
Enregistrer l'utilisateur

  Ajouter une API de registre
  Ajouter une méthode de service d'enregistrement
  Ajouter un lien d'inscription
  Ajouter un composant de registre
Chargement!

  Ajouter une image
  Ajouter un composant
  Ajouter un service
  Ajouter un intercepteur
Page de paiement

  Créer un modèle de commande
  Créer un composant de page de paiement
    Ajouter au routeur
  Ajouter un utilisateur au service utilisateur
  Ajouter le panier au service de panier
  Créer un composant de liste d'articles de commande
  Ajouter une carte à la page de paiement
    Ajouter le paquet Leaflet npm
      Ajouter @types/dépliant
      Ajouter Css à angular.json
    Ajouter AddressLatLng au modèle de commande
    Composant Créer une carte
      Ajouter à la page de paiement
      Ajouter TS
        Changer le sélecteur de carte d'application en carte
      Ajouter HTML
      Ajouter CSS
    Ajouter un garde d'authentification
  Enregistrer la commande
    Ajouter un modèle de commande
    Ajouter l'énumération du statut de la commande
    Ajouter un middleware d'authentification
    Ajouter un routeur de commande
      Ajouter créer une API
    Ajouter des URL de commande à urls.ts
    Ajouter un service de commande
      Ajouter une méthode de création
    Ajouter un intercepteur d'authentification
Page de paiement

  Générer un composant
  Ajouter l'API 'getOrderForCurrentUser'
  Ajouter une méthode de service de commande
  Connecter le composant au service
  Rendre le composant de la carte en lecture seule
Ajouter Paypal

  Générer un composant
    Ajouter à la page de paiement
  Obtenir l'identifiant du client Paypal
  Ajouter Paypal JS à index.html
  Configurer le bouton Paypal
  Ajouter Pay api au routeur de commande
  Obtenir un compte bac à sable Paypal
Page de suivi de commande

  Générer un composant
    Ajouter aux itinéraires
  Ajouter une API
    Ajouter à urls.ts
  Ajouter une méthode à order.service
  Ajouter du HTML
  Ajouter CSS
Déployer sur Heroku

  OutputPath dans angular.json
  package.json
    front-end
    back-end
    racine
  BASE_URL dans urls.ts
  Configuration du dossier public dans server.ts
  Exécuteur de commandes
  Ajouter un dossier construit à .gitignore
  S'engager et pousser
Mise à jour des forfaits (facultatif)

  Installer npm-check-upates en tant que package global
  Exécutez ncu -u dans le dossier frontal
  Rétrograder le manuscrit vers la version ~4.8.2
  Exécutez npm install --force
  Exécuter npm start
  Exécutez ncu -u dans le dossier backend
  Exécutez l'installation de npm
  Exécuter npm start

## ENGLISH

Introduciton to the course

Install development tools

Create Angular App

  Create project's folder
  Install @angular/cli
  Create App as frontend
Add Header

  Generate Component
  Add Html
  Add CSS
List Foods

  Create Food model
  Create data.ts
    Add sample foods
  Add images to assets
  Create Food service
  Create Home component
    Add ts
    Add html
    Add css
Search

  Add method to Food service
  Add search route
  Show search result in Home component
  Generate search component
    Add to home component
    Add ts
    Add html
    Add css
Tags Bar

  Create Tag model
  Add sample tags to data.ts
  Food service
    Add get all tags method
    Add get all foods by tag method
  Add tags route
  Show tag result in Home component
  Generate Tags component
    Add to home component
    Add ts
    Add html
    Add css
Food Page

  Add method to food service
  Generate Food Page component
    Add Route
    Add ts
    Add html
    Add css
Cart Page

  Create CartItem Model
  Create Cart Model
  Generate Cart service
  Add to Cart Button in Food Page
  Generate Cart page component
    Add Route
    Add ts
    Add html
    Add css
Not Found!

  Generate Component
    Add ts
    Add html
    Add css
  Add To Pages
    Home Page
    Food Page
    Cart Page
Connect To Backend

  Create backend folder
  npm init
  npm install typescript
  Create tsconfig.json
  Create .gitignore
  Copy data.ts to backend/src
  npm install express cors
  Create server.ts
    install @types
    Add Apis
  npm install nodemon ts-node --save-dev
  Add urs.ts to frontend
  Add HttpClient module
  Update food service
Login Page

  Generate Component

    Add to routes
    Add ts
    Add html
      Import Reactive Forms Module
    Add Css
  Add Login Api

    Use json
    Add jsonwebtoken
    Test Using Postman
Generate User Service

  Generate User model
  Add User Subject
  Add Login Method
    Add User Urls
    Generate IUserLogin interface
    Add ngx-toastr
      Import Module
      Import BrowserAnimationsModule
      Add styles in angular.json
    Add to Header
  Add Local Storage methods
  Add Logout Method
    Add to Header
Make Components For Login Page

  Input Container
  Input Validation
  Text Input
  Default Button
Connect Login API To MongoDB Atlas

  Moving Apis into routers
  Create MongoDB Atlas
  Create .env file
  Install
    mongoose
    dotenv
    bcryptjs
    express-async-handler
  Connect to MongoDB Atlas
  Use MongoDB instead of data.ts in apis
Register User

  Add Register api
  Add Register service method
  Add Register link
  Add Register Component
Loading!

  Add Image
  Add Component
  Add Service
  Add Interceptor
Checkout Page

  Create Order Model
  Create Checkout Page Component
    Add To Router
  Add User to User Service
  Add Cart to Cart Service
  Create Order Items List Component
  Adding Map To The Checkout Page
    Add Leaflet npm package
      Add @types/leaflet
      Add Css to angular.json
    Add AddressLatLng to Order Model
    Create Map component
      Add to checkout page
      Add TS
        Change app-map selector to map
      Add Html
      Add CSS
    Add Auth Guard
Save Order
  Add Order Model
  Add Order Status Enum
  Add Auth Middleware
  Add Order Router
    Add create API
  Add Order Urls to urls.ts
  Add Order Service
    Add create Method
  Add Auth Interceptor
Payment Page

  Generate Component
  Add 'getOrderForCurrentUser' api
  Add Order Service method
  Connect Component to Service
  Make the map component readonly
Adding Paypal

  Generate Component
    Add to payment page
  Get Paypal client Id
  Add Paypal JS to index.html
  Set up Paypal button
  Add Pay api to order router
  Get Paypal sandbox account
Order Track Page

  Generate Component
    Add to routes
  Add API
    Add to urls.ts
  Add method to order.service
  Add HTML
  Add CSS
Deploy On Heroku

  OutputPath in angular.json
  package.json
    frontend
    backend
    root
  BASE_URL in urls.ts
  Public folder config in server.ts
  Run commands
  Add built folder to .gitignore
  Commit and Push
Updating Packages (Optional)

  Install npm-check-upates as a global package
  Run ncu -u in the frontend folder
  Downgrade typescript to version ~4.8.2
  Run npm install --force
  Run npm start
  Run ncu -u in the backend folder
  Run npm install
  Run npm start

