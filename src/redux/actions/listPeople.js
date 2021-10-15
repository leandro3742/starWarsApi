export const TRY_GET_PEOPLE = 'TRY_GET_PEOPLE';
export const SUCCESS_GET_PEOPLE = 'SUCCESS_GET_PEOPLE';
export const TRY_GET_PERSON = 'TRY_GET_PERSON';
export const SUCCESS_GET_PERSON = 'SUCCESS_GET_PERSON';

export const tryGetPeople = payload => ({
    type: TRY_GET_PEOPLE,
    ...payload
})

export const successGetPeople = payload => ({
    type: SUCCESS_GET_PEOPLE,
    ...payload
})

export const tryGetPerson = payload => ({
    type: TRY_GET_PERSON,
    ...payload
})

export const successGetPerson = payload => ({
    type: SUCCESS_GET_PERSON,
    ...payload
})