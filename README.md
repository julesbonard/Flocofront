## Bienvenue sur la documentation d'une app d'enfer !

<img src="./src/assets/logo-floco.png" alt="logo floco" width="300"/>

### `Présentation`

Floco est un projet client fait par ~~**5**~~ 4 élèves de la [Wild Code School](https://www.wildcodeschool.com/) en 1 mois et demi.

Le but de l'appli [(PWA)](https://fr.wikipedia.org/wiki/Progressive_web_app) est d’inciter les utilisateurs à participer à la réimplantation de certaines plantes, en voie de disparition dans la région de Strasbourg.

### `Organisation des dossiers`

```
public/
├─── src/
|   ├── assets/  # Images
|   |
|   ├──components/ # Dossier qui regroupe tout les composants du dossier page avec son fichier module.css.
|   |   |
|   │   ├── Account/
|   │   │   ... # tresaury -> regroupe le badge, le niveau et les points de l'utilisateur
|   |   |
|   │   ├── Agenda/
|   │   │   ... # Dossier vide -> calendrier des saisons des plantes
|   │   │
|   │   ├── Bibliothèque/
|   |   |  ... # Ficher search -> permet de rechercher les plantes selon le choix des utilisateurs
|   |   |  |
|   |   |  └── Plants/
|   |   |   ... # Dossier contient les photos des plantes
|   │   |
|   │   ├── Connexion/
|   |   |  └─── Home/
|   |   |   ... # Partie permettant de se connecter ou creer un compte
|   |   |  └─── Login/
|   |   |   ... # Partie permettant de se connecter
|   |   |  └─── Register/
|   |   |   ... # Partie permettant de creer un compte
|   │   |
|   |   ├── Layouts/
|   |   |   ... # Partie incluant menu burger, footer, layouts
|   |   |
|   |   ├── Main/
|   |   |  └─── Map/
|   |   |       ... # page principale avec la modale, les boutons et la map
|   |   |  └─── Stats/
|   |   |       ... # graphique representant les niveaux d'oxygene
|   |   |
|   |   ├── MiniFlora/
|   |   |  └─── Access/
|   |   |       ... # Partie representant l'inscription des partenaires
|   |   |  └─── Compass/
|   |   |       ... #
|   |   |  └─── Partner/
|   |   |       ... # liste des differents partenaires
|   |   |  └─── Pot/
|   |   |       ... # choix des differents types de pots
|   |   |  └─── Progress/
|   |   |       ... # Partie representant l'evolution du choix de la plante du partenaire jusqu'au lieu du developpement de la plante
|   |   |
|   |   ├── Reducers
|   |   |   ... # Dossier qui regroupe tous les fichiers insdispensable aux reducers
|   |   |
|   |   |
|   |   └── components/
|   └── src/
|
├── .env/
|   ... # contient le lien de deploiement vers heroku.app
|
└── public/

```

### `Lier back avec front`

#### Ouvrir l'app en front:

Pour un environemment de developpement, changer l'URL dans le fichier: _.env_

```
REACT_APP_API_URL="change url"
```

#### Lien:

```
https://github.com/WildCodeSchool/biarritz_P3_floco_frontend
```

### Ouvrir l'app en back:

fèr comme exemple.env

#### Lien:

```
https://github.com/WildCodeSchool/biarritz_P3_floco_backend
```

### `Api`

```
https://floco-app.herokuapp.com/
```

### `Trucs kon a utilisé`

- Semantic ui
- Semantic ui React
- Axios
- Chart.js
- Leaflet
- Node-sass
- React
- React-leaflet
- React-router-dom
- Redux

### `Fonctionnalités à mettre en place`

#### Page D'acceuil/Map

- La partie stats des plantes locales.

#### Mon Compte

- Faire un tchat.
- Faire un système d'ajout d'amis.
- Développer les sous-menus.
- Ajouter une partie niveau en rapport avec le nombre de plantes de l'utilisateur.

#### Plantes

- Faire une page d'ajout de plantes.

#### Bibliothèque

- Ajouter Des filtres pour rechercher une plante.

### `L'équipe`

![](src/assets/8874047.png)

Etudiant de la Wild Code School cool

- [Dominic Brice](https://github.com/dominicBrice)
- [Lucas Leproux](https://github.com/lucas240)
- [Jules Bonard](https://github.com/julesbonard)
- [Frédérique Mendy](https://github.com/Superdref)
- ~~[Fonny Camus](https://github.com/fan6559)~~

#### Porteuse de projet: "Ying Wang"
