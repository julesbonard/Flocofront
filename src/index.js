import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'

import App from './App';
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer"

const store = createStore(
    combineReducers({ authReducer, userReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.register();
