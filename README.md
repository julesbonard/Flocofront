# Welcome in an awesome App documentation !

<img src="./src/assets/logo-floco-rond.png" alt="logo floco" width="300"/>

## `Presentation`

Floco is a client project created by 4 [Wild Code School](https://www.wildcodeschool.com/) students in one month and a half.

The application [(PWA)](https://fr.wikipedia.org/wiki/Progressive_web_app) is made to encourage users to participate in the reimplantation of certain plants, in danger of extinction in Strasbourg region.

## `File directory`

```
public/
├─── src/
|   ├── assets/  # Images
|   |
|   ├──components/ # Folder which contains all components'folder, every component folder contains a css file
|   |   |
|   │   ├── Account/
|   │   │   ... # tresaury -> contains the user level badge and the points he won
|   |   |
|   │   ├── Agenda (Diary)/
|   │   │   ... # Empty folder -> season schedule for planting and blossom
|   │   │
|   │   ├── Bibliothèque (Library)/
|   |   |  ... # File search -> allows searching for plants selected by users
|   |   |  |
|   |   |  └── Plants/
|   |   |   ... # Folder which contains specification plants sheets
|   │   |
|   │   ├── Connexion/
|   |   |  └─── Home/
|   |   |   ... # Part which allows login or register
|   |   |  └─── Login/
|   |   |   ... # Part which allows login, also by Google and Facebook
|   |   |  └─── Register/
|   |   |   ... # Part which allows account creation
|   │   |
|   |   ├── Layouts/
|   |   |   ... # Contains burger menu, footer, layouts
|   |   |
|   |   ├── Main/
|   |   |  └─── Map/
|   |   |       ... # Homepage which contains a Map with modal and user's plant localisation points
|   |   |  └─── Stats/
|   |   |       ... # Oxygen level graphics
|   |   |
|   |   ├── MiniFlora/
|   |   |  └─── Access/
|   |   |       ... # Users inscription part
|   |   |  └─── Compass/
|   |   |       ... #
|   |   |  └─── Partner/
|   |   |       ... # Partner listing
|   |   |  └─── Pot/
|   |   |       ... # Flower pots listing
|   |   |  └─── Progress/
|   |   |       ... # This part represent the user plant evolution from acquisition through the partner to plant development
|   |   |
|   |   ├── Reducers
|   |   |   ... # Contains all files required by Reducer
|   |   |
|   |   |
|   |   └── components/
|   └── src/
|
├── .env/
|   ... # Contains heroku.app deployment link
|
└── public/

```

### Our application is developped in Javascript and we use React (Create React App).

```
A src folder which contains:

- assets folder: all images files, extension = .png,
- components folder: folders with a component file, extension = .jsx
  and his style file, extension = .module.css,
- a router file, extension = .jsx,
- a Layout folder: layout files, extension = .js.
```

```
A reducer folder (Redux) which contains:
- reducer action files, extension = .js.
3 indipensables files:
- App.js, index.js,
- serviceWorker.js, the good way for create a PWA.
```

### Open front side application:

```
Create a programming environment, changing the URL in file : _.env_

REACT_APP_API_URL="https://floco-app.herokuapp.com/"
```

#### `Technic Stack`

```

- React
- React-router-dom
- React-leaflet
- Semantic ui React
- Node-sass
- Axios
- Chart.js
- Redux
```

## `The Team`

![](src/assets/8874047.png)

Wild Code School cool students

<img src="./src/assets/FlocoTeam.png" alt="Team Floco">

- [Lucas Leproux](https://github.com/lucas240)
- [Frédérique Mendy](https://github.com/Superdref)
- [Dominic Brice](https://github.com/dominicBrice)
- [Jules Bonard](https://github.com/julesbonard)

## Project leader: "Ying Wang"

<img src="./src/assets/react-logo.png" alt="logo React" width="60"/>

<img src="./src/assets/Leaflet_logo.png" alt="logo Leaflet" width="200"/>

<img src="./src/assets/semanticuireact-logo.png" alt="logo Semantic Ui React" width="60"/>

<img src="./src/assets/sass-logo.png" alt="logo Sass" width="80"/>

<img src="./src/assets/redux.png" alt="logo Redux" width="270"/>
