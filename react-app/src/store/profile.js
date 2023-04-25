const LOAD_PROFILE_DETAILS = 'profile/LOAD_PROFILE_DETAILS';
const FOLLOW_PROFILE = 'profile/FOLLOW_PROFILE';
const UNFOLLOW_PROFILE = 'profile/UNFOLLOW_PROFILE';


const loadProfile = (profile) => ({
    type: LOAD_PROFILE_DETAILS,
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


const initialState = { profile: {} }

const profile = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PROFILE_DETAILS:
            newState = {...state, profile: {}};
            newState.profile = action.profile;
            return newState;
        default:
            return state;
    }
}

export default profile;
