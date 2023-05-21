const GET_WATCHLIST = 'watchlist/GET_WATCHLIST';
const ADD_TO_WATCHLIST = 'watchlist/ADD_TO_WATCHLIST';
const REMOVE_FROM_WATCHLIST = 'watchlist/REMOVE_FROM_WATCHLIST';

const get = (watchlist) => ({
    type: GET_WATCHLIST,
    watchlist
})

const add = (movie) => ({
    type: ADD_TO_WATCHLIST,
    movie
})

const remove = (movie) => ({
    type: REMOVE_FROM_WATCHLIST,
    movie
})


export const getWatchlist = (userId) => async (dispatch) => {
    const response = await fetch(`/api/watchlist/${userId}`)

    if (response.ok) {
        const watchlist = await response.json();
        dispatch(get(watchlist))
    }
}

export const addToWatchlist = (movie) => async (dispatch) => {
    const response = await fetch(`/api/watchlist/${movie.id}`, {
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(movie),
    })

    if (response.ok) {
        const watchlist = await response.json();
        dispatch(add(movie))
        return watchlist;
    }
}

export const removeFromWatchlist = (movie) => async (dispatch) => {
    const response = await fetch(`/api/watchlist/${movie.id}`, {
        method:"DELETE"
    })

    if (response.ok) {
        dispatch(remove(movie))
    }
}


const initialState = {}

const watchlist = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_WATCHLIST:
            newState = {};
            action.watchlist.Watchlist.forEach((movie) => {
                newState[movie.id] = movie
            });
            return newState;
        case ADD_TO_WATCHLIST:
            newState = {...state};
            newState[action.movie.id] = action.movie;
            return newState;
        case REMOVE_FROM_WATCHLIST:
            newState = {...state};
            delete newState[action.movie.id];
            return newState;
        default:
            return state;

    }
}


export default watchlist;
