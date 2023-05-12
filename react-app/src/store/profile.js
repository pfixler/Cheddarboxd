const LOAD_PROFILE_DETAILS = 'profile/LOAD_PROFILE_DETAILS';
// const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
// const FOLLOW_PROFILE = 'profile/FOLLOW_PROFILE';
// const UNFOLLOW_PROFILE = 'profile/UNFOLLOW_PROFILE';


const loadProfile = (profile) => ({
    type: LOAD_PROFILE_DETAILS,
    profile
})

// const update = (profile) => ({
//     type: UPDATE_PROFILE,
//     profile
// })

// const follow = (profile) => ({
//     type: FOLLOW_PROFILE,
//     profile
// })

// const unfollow = (profile) => ({
//     type: UNFOLLOW_PROFILE,
//     profile
// })


export const loadProfileDetails = (profileId) => async (dispatch) => {

    const response = await fetch(`/api/profiles/${profileId}`)


    if (response.ok) {
        const profile = await response.json();
        dispatch(loadProfile(profile));
    }
}

// export const updateProfile = (profile) => async (dispatch) => {
//     console.log('profile in thunk', profile)
//     const response = await fetch(`/api/profiles/${profile.id}`, {
//         method:"PUT",
//         headers:{ 'Content-Type': 'application/json' },
//         body: JSON.stringify(profile),
//     })
//     console.log('response', response)

//     if (response.ok) {
//         const updatedProfile = await response.json()
//         console.log('updated profile', updatedProfile)
//         dispatch(update(updatedProfile))
//     }
// }

// export const followProfile = (profile) => async (dispatch) => {
//     const response = await fetch(`/api/follows/user/${profile.id}`, {
//         method: "POST",
//         headers:{ 'Content-Type': 'application/json' },
//         body: JSON.stringify(profile),
//     })

//     if (response.ok) {
//         const data = response.json()
//         dispatch(follow(profile))
//     }
// }

// export const unFollowProfile = (profile) => async (dispatch) => {
//     const response = await fetch(`/api/follows/user/${profile.id}`, {
//         method: "DELETE",
//         headers:{ 'Content-Type': 'application/json' },
//         body: JSON.stringify(profile),
//     })

//     if (response.ok) {
//         const data = response.json()
//         dispatch(unfollow(profile))
//     }
// }




const initialState = { profile: {} }

const profile = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PROFILE_DETAILS:
            newState = {profile: {}};
            newState.profile = action.profile;
            return newState;
        // case UPDATE_PROFILE:
        //     newState = {profile: {...state.profile}};
        //     newState.profile[action.profile.id] = action.profile;
        //     return newState;
        default:
            return state;
    }
}

export default profile;
