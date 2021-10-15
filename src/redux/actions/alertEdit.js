export const CLOSE_ALERT_EDIT = 'CLOSE_ALERT_EDIT';
export const OPEN_ALERT_EDIT = 'OPEN_ALERT_EDIT';
export const DELETE_PERSON = 'DELETE_PERSON';

export const openAlertEdit = payload =>({
    type: OPEN_ALERT_EDIT,
    index: payload,
    ...payload
})

export const closeAlertEdit = payload =>({
    type: CLOSE_ALERT_EDIT,
    index: payload,
    ...payload
})

export const deletePerson = payload => ({
    type: DELETE_PERSON,
    ...payload
})

// export const successGetPeople = payload => ({
//     type: SUCCESS_GET_PEOPLE,
//     ...payload
// })