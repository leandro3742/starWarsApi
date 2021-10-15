export const CLOSE_ALERT = 'CLOSE_ALERT';
export const OPEN_ALERT = 'OPEN_ALERT';
export const DELETE_PERSON = 'DELETE_PERSON';

export const closeAlert = payload => ({
    type: CLOSE_ALERT,
    ...payload
})

export const openAlert = payload =>({
    type: OPEN_ALERT,
    index: payload,
    ...payload
})
export const deletePerson = payload => ({
    type: DELETE_PERSON,
    ...payload
})
