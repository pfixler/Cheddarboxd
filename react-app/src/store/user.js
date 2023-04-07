const LOAD_USER_DETAILS = 'user/LOAD_USER_DETAILS';
const FOLLOW_USER = 'user/FOLLOW_USER';
const UNFOLLOW_USER = 'user/UNFOLLOW_USER';


const loadUser = (user) => ({
    type: LOAD_USER_DETAILS,
    user
})

const follow = () => {

}

const unfollow = () => {

}


export const loadUserDetails = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}`)


    if (response.ok) {
        const user = await response.json();
        dispatch(loadUser(user));
    }
}


const initialState = { user: {} }

const user = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_USER_DETAILS:
            newState = {user: {}};
            newState.user = action.user;
            return newState;
        default:
            return state;
    }
}

export default user;
