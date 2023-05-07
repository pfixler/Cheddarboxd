const LOAD_PROFILE_DETAILS = 'profile/LOAD_PROFILE_DETAILS';
const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
const FOLLOW_PROFILE = 'profile/FOLLOW_PROFILE';
const UNFOLLOW_PROFILE = 'profile/UNFOLLOW_PROFILE';


const loadProfile = (profile) => ({
    type: LOAD_PROFILE_DETAILS,
    profile
})

const update = (profile) => ({
    type: UPDATE_PROFILE,
    profile
})

const follow = () => {

}

const unfollow = () => {

}


export const loadProfileDetails = (profileId) => async (dispatch) => {

    const response = await fetch(`/api/profiles/${profileId}`)


    if (response.ok) {
        const profile = await response.json();
        dispatch(loadProfile(profile));
    }
}

export const updateProfile = (profile) => async (dispatch) => {
    const response = await fetch(`/api/profiles/${profile.id}`, {
        method:"PUT",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
    })

    if (response.ok) {
        const updatedProfile = await response.json()
        dispatch(update(updatedProfile))
    }
}


const initialState = { profile: {} }

const profile = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PROFILE_DETAILS:
            newState = {...state, profile: {}};
            newState.profile = action.profile;
            return newState;
        case UPDATE_PROFILE:
            newState = {profile: {...state.profile}};
            newState.profile[action.profile.id] = action.profile;
            return newState;
        default:
            return state;
    }
}

export default profile;
