import { put, call, takeLatest } from "redux-saga/effects";
import { SUCCESS_GET_PEOPLE, TRY_GET_PEOPLE, SUCCESS_GET_PERSON, TRY_GET_PERSON } from "../actions/listPeople";
import apiCall from "../utils";

export function* getPeople({ payload }) {
    try {
        const results = yield call(apiCall, 'get', 'https://swapi.dev/api/people')
        const response = results.results
        yield put({ type: SUCCESS_GET_PEOPLE, response })
        
    } catch (error) {
        console.log("error")
    }
}
var index = 0;
export function sendIndex(value){
    index = value+1;
}

export function* getPerson({ payload }) {
    let url = 'https://swapi.dev/api/people/' + index
    console.log(url)
    try {
        const results = yield call(apiCall, 'get', url)
        const response = results
        yield put({ type: SUCCESS_GET_PERSON, response })
        
    } catch (error) {
        console.log("error")
    }
}

// Watchers
export default function* people(){
    yield takeLatest(TRY_GET_PEOPLE, getPeople); 
    yield takeLatest(TRY_GET_PERSON, getPerson)

}