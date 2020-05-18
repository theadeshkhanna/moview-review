import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react";
import AuthStore from './stores/AuthStore';
import MovieStore from "./stores/MovieStore";
import BookmarkStore from "./stores/BookmarkStore";

const root = (
    <Provider
        AuthStore={AuthStore}
        MovieStore={MovieStore}
        BookmarkStore={BookmarkStore}>
        <App />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
