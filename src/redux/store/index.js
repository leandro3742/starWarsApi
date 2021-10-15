/* eslint-disable eqeqeq */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from  'redux-saga';

import rootSaga from '../sagas/index';

function reducers(state = {result: [], favourites: [], loading: false, alert: false, deletePeople: false, profile: {}}, action) {
    let aux = [];
    switch (action.type){
        case 'CLOSE_ALERT': 
            return{...state, alert: false}

        case 'OPEN_ALERT': 
            return{...state, alert: true}

        case 'CLOSE_ALERT_EDIT': 
            return{...state, alertEdit: false}

        case 'OPEN_ALERT_EDIT': 
            return{...state, alertEdit: true}
        
        case 'DELETE_PERSON':
            aux = [];
            for(let i in state.result){
                if(i != action.index)
                    aux.push(state.result[i])
            }
            return {...state, result: aux, deletePeople: true, alert: false}

        case 'ADD_FAVOURITE':
            return {...state, favourites: action.newFav}

        case 'REMOVE_FAVOURITE':
            console.log(action)
            return {...state, favourites: action.newFav}
        case 'EDIT_PERSON':
            aux = []
            for(let i in state.result){
                if(state.result[i].name === action.oldPerson){
                    aux[i] = action.newPerson
                }
                else
                    aux[i] = state.result[i]
            }
            return {...state, result: aux}
        case 'LOAD_PROFILE':
            return {...state, profile: action.profile}
        
        case 'SUCCESS_GET_PEOPLE': 
            return{...state, result: action.response ,loading: false }
        
        case 'TRY_GET_PEOPLE':
            return{ ...state, result: [], loading: true }

        default:
            return{state}
    }
}

function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return {store}
}

// const sagaMiddleware = reduxSaga()
let store = null;
export default function getState(){
    if(store === null) {
        const result = configureStore({});
        store = result.store;
    }
    return {store}
}