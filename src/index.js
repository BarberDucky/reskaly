import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas/index'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
store.runSaga = sagaMiddleware.run
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
