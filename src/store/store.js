import { applyMiddleware, createStore } from "redux";
import {CountReducer} from './reducer'
import createSagaMiddleware from "redux-saga";
import {countWatcher} from './saga/CountSaga'



export const sagaMiddleware = createSagaMiddleware()
export const Store = createStore(CountReducer,applyMiddleware(sagaMiddleware))



sagaMiddleware.run(countWatcher)