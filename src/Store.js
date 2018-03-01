import {Platform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers/index'


const middleware = applyMiddleware(
    thunk,
    reduxPromise,
    logger
);

const Store = createStore(
    RootReducer,
    compose(
        middleware
    )
)

export default Store;