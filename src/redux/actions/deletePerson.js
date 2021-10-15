export const DELETE_PERSON = 'DELETE_PERSON';

var indexPerson = null;

export const saveIndex = index => {
    indexPerson = index
}

export function deletePerson(payload){
    return{
        type: DELETE_PERSON,
        index: indexPerson,
        ...payload
    }
}
