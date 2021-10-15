export const LOAD_PROFILE = 'LOAD_PROFILE';

var profile = {};

export const sendProfile = data => {
    profile = data;
}

export function loadProfile(payload){
    return{
        type: LOAD_PROFILE,
        profile: profile,
        ...payload
    }
}
