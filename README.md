# Welcome in an awesome App documentation !

<div align="center"><img src="./src/assets/logo-floco-rond.png" alt="logo floco" width="300"/></div>

## Presentation

Floco is a client project created by 4 [Wild Code School](https://www.wildcodeschool.com/) students in one month and a half.

The application [(PWA)](https://fr.wikipedia.org/wiki/Progressive_web_app) is made to encourage users to participate in the reimplantation of certain plants, in danger of extinction in Strasbourg region.

## Getting started

```bash
git clone
npm install
echo REACT_APP_API_URL=https://your-api-url.com/ > .env
npm start
```

## Environment variables

Your env variables should be in a `.env` file in your application root directory.
You will create it in the getting started

```
REACT_APP_API_URL=https://your-api-url.com/ > .env
```

## File directory

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
|
├── .env/
|   ... # Contains heroku.app deployment link
|
└── public/

```

## Technical Stack

The project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

- [<img src="./src/assets/react-logo.png" alt="logo React" width="60"/>](https://reactjs.org/)
- [<img src="./src/assets/Leaflet_logo.png" alt="logo Leaflet" width="200"/>](https://reactjs.org/)
- [<img src="./src/assets/semanticuireact-logo.png" alt="logo Semantic Ui React" width="60"/>](https://react.semantic-ui.com/)
- [<img src="./src/assets/sass-logo.png" alt="logo Sass" width="80"/>](https://sass-lang.com/documentation)
- [<img src="./src/assets/logo-axios.png" alt="logo Axios" width="180"/>](https://www.axios.com/)
- [<img src="./src/assets/logo-charts.png" alt="logo Charts js" width="60"/>](https://www.chartjs.org/docs/latest/)
- [<img src="./src/assets/redux.png" alt="logo Redux" width="220"/>](https://redux.js.org/introduction/getting-started/)

## The Team

![](src/assets/8874047.png)

Wild Code School cool students

<img src="./src/assets/FlocoTeam.png" alt="Team Floco">

- [Lucas Leproux](https://github.com/lucas240)
- [Frédérique Mendy](https://github.com/Superdref)
- [Dominic Brice](https://github.com/dominicBrice)
- [Jules Bonard](https://github.com/julesbonard)

Project leader: "Ying Wang"
