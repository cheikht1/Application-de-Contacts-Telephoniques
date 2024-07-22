# Application de Contacts Téléphoniques

## Description

Cette application de contacts téléphoniques permet aux utilisateurs de gérer une liste de contacts sur leurs appareils mobiles. Développée en utilisant [Apache Cordova](https://cordova.apache.org/) et [jQuery Mobile](https://jquerymobile.com/), l'application offre une interface conviviale similaire aux applications de contacts sur iPhone.

## Fonctionnalités

- Affichage d'une liste de contacts avec icônes et noms
- Recherche de contacts par prénom, nom ou numéro de téléphone
- Affichage détaillé des informations d'un contact
- Ajout de nouveaux contacts via une icône sur la page d'accueil
- Interface utilisateur réactive grâce à jQuery Mobile

## Structure du Projet

Le projet est structuré de la manière suivante :

```
/
├── www/
│   ├── index.html
│   ├── css/
│   │   └── index.css
│   ├── js/
│   │   └── index.js
│   ├── img/
│   │   └── (images de l'application)
│   └── lib/
│       ├── jquery.min.js
│       └── jquery.mobile-1.4.5.min.css
|       └── jquery.mobile-1.4.5.min.js
└── README.md
```

- **www/** : Contient les fichiers HTML, CSS et JS déployés dans l'application.
- **index.html** : Le fichier principal HTML qui définit la structure de l'application.
- **css/** : Contient les fichiers de style CSS pour la mise en forme.
- **js/** : Contient les fichiers JavaScript pour les fonctionnalités de l'application.
- **img/** : Contient les images utilisées dans l'application.
- **lib/** : Contient les bibliothèques tierces comme jQuery et jQuery Mobile.

## Prérequis

- [Node.js](https://nodejs.org/) (v12.0.0 ou supérieur)
- [Apache Cordova](https://cordova.apache.org/) (v10.0.0 ou supérieur)

## Installation

1. Clonez ce dépôt :
   ```
   git clone https://github.com/cheikht1/Application-de-Contacts-Telephoniques.git
   cd app-contacts-cordova
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

3. Ajoutez la plateforme de votre choix :
   ```
   cordova platform add android
   ```
   ou
   ```
   cordova platform add ios
   ```

4. Construisez l'application :
   ```
   cordova build
   ```

## Exécution

Pour exécuter l'application sur un émulateur ou un appareil connecté :

```
cordova run android
```
ou
```
cordova run ios
```

## Développement

Le code principal de l'application se trouve dans les fichiers suivants :

- `www/index.html` : Structure HTML de l'application
- `www/css/style.css` : Styles CSS personnalisés
- `www/js/app.js` : Logique JavaScript de l'application

Pour modifier l'application, éditez ces fichiers selon vos besoins.

## Contribution

Les contributions à ce projet sont les bienvenues. Veuillez suivre ces étapes pour contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request


## Contact

Cheikh Mouhamed Tidiane Thiam - cmtt1004@gmail.com

Lien du projet : [https://github.com/cheikht1/Application-de-Contacts-Telephoniques](https://github.com/cheikht1/Application-de-Contacts-Telephoniques)
