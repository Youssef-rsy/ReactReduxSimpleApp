import React from 'react';
import ReactDOM from 'react-dom';

import { createStore , combineReducers , applyMiddleware , compose} from 'redux';
import {Provider ,} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';
import thunk from 'redux-thunk';

//to combine the reducer into one so that we can have one global state 
const rootReducer = combineReducers({
    ctr :counterReducer,
    res : resultReducer
});

const logger  = store => {
    return nextArg => {
        return action => {
            console.log('[Middleware ] Dispatching :',action)
            const result = nextArg(action);
            console.log('[Middleware ] next State :',store.getState())
            return result ;
        }
    }
}

// for redux chrome Devtools extension 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(rootReducer , composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
