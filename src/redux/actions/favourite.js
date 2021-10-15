export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

var fav = [];
export var possible = null;

export const removeFav = data => {
    let index = fav.indexOf(data)
    fav.splice(index, 1);
    console.log(fav)
}
export const addFav = data => {
    fav.push(data)
    return "ok"
}
export const possibleFav = data => {
    possible = data;
}
export const showStar = data => {
    let aux = fav.find(elem => elem === data)
    if(aux)
        return "ml-3"
    return "d-none"
}

export const existFav = data => {
    let aux = fav.find(elem => elem === data)
    if(aux)
        return true
    return false
}

export function addFavourite(payload){
    return{
        type: ADD_FAVOURITE,
        newFav: fav,
        ...payload
    }
}

export function removeFavourite(payload){
    return{
        type: REMOVE_FAVOURITE,
        newFav: fav,
        ...payload
    }
}
