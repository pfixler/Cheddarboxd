const ADD_TO_WATCHLIST = '/watchlist/ADD_TO_WATCHLIST';
const REMOVE_FROM_WATCHLIST = 'watchlist/REMOVE_FROM_WATCHLIST';

const add = (movie) => ({
    type: ADD_TO_WATCHLIST,
    movie
})

const remove = (movie) => ({
    type: REMOVE_FROM_WATCHLIST,
    movie
})


const addToWatchlist = (movie) => async (dispatch) => {
    const response = fetch(`/api/watchlist/${movie.id}`, {
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





const initialState = {}

const watchlist = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
        case REMOVE_FROM_WATCHLIST:
        default:
            return state

    }
}


export default watchlist;
