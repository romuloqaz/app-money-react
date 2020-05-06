import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware ,createStore} from 'redux';
import {Provider} from 'react-redux';

import promise from 'redux-promise';

import reducers from './main/reducers';
import App from './main/app';

const store = applyMiddleware(promise)(createStore)(reducers);
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));