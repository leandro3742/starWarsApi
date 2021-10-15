export const EDIT_PERSON = 'EDIT_PERSON';
export const OPEN_ALERT = 'OPEN_ALERT';
export const DELETE_PERSON = 'DELETE_PERSON';

let newPerson = null;

export const editPerson = payload => ({
    type: EDIT_PERSON,
    newPerson: newPerson,
    ...payload
})

export const savePerson = (newP) => {
    newPerson = newP;
}

export const openAlert = payload =>({
    type: OPEN_ALERT,
    index: payload,
    ...payload
})
export const deletePerson = payload => ({
    type: DELETE_PERSON,
    ...payload
})
