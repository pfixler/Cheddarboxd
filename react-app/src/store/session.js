// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_USER = 'user/UPDATE_USER';
const FOLLOW_PROFILE = 'profile/FOLLOW_PROFILE';
const UNFOLLOW_PROFILE = 'profile/UNFOLLOW_PROFILE';

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const update = (user) => ({
    type: UPDATE_USER,
    user
})

const follow = (profile) => ({
    type: FOLLOW_PROFILE,
    profile
})

const unfollow = (profile) => ({
    type: UNFOLLOW_PROFILE,
    profile
})


export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};


export const login = (credential, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			credential,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};


export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};


export const signUp = (username, email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};


export const updateUser = (user) => async (dispatch) => {
    const response = await fetch(`/api/profiles/${user.id}`, {
        method:"PUT",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })

    if (response.ok) {
		const updatedUser = await response.json()
        dispatch(update(updatedUser))
    }
}

export const followProfile = (profile) => async (dispatch) => {
    const response = await fetch(`/api/follows/user/${profile.id}`, {
        method: "POST",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
    })

    if (response.ok) {
        const newFollow = await response.json()
        dispatch(follow(newFollow))
		return newFollow
    }
}

export const unfollowProfile = (profile) => async (dispatch) => {
    const response = await fetch(`/api/follows/user/${profile.id}`, {
        method: "DELETE",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(unfollow(profile))
		return data
    }
}


const initialState = { user: null };

export default function reducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case UPDATE_USER:
			return { user: action.user }
		case FOLLOW_PROFILE:
			newState = { ...state }
			newState.user.following[action.profile.id] = action.profile
			return newState
		case UNFOLLOW_PROFILE:
			newState = { ...state }
			delete newState.user.following[action.profile.id]
			return newState
		default:
			return state;
	}
}
