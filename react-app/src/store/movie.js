

const LOAD_ALL_MOVIES = 'movie/LOAD_ALL_MOVIES';
const LOAD_ONE_MOVIE = 'movie/LOAD_ONE_MOVIE';

const loadAll = (movies) => ({
    type: LOAD_ALL_MOVIES,
    movies
})

const loadOne = (movies) => ({
    type: LOAD_ONE_MOVIE,
    movies
})



export const loadAllMovies = () => async (dispatch) => {
    const response = await fetch('api/movies/');

    if (response.ok) {
        const movies = await response.json();
        console.log('movies in thunk:', movies)
        dispatch(loadAll(movies))
    }
}

 export const loadOneMovie = (movieId) => async (dispatch) => {
    const response = await fetch(`api/movies/${movieId}`)

    if (response.ok) {
        const movie = await response.json()
        dispatch(loadOne(movie))
    }
 }

const initialState = { allMovies: {}, oneMovie: {} }

const movie = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_MOVIES:
            newState = { allMovies: {}, oneMovie: {} }
            action.movies.Movies.forEach(movie => {
                newState.allMovies[movie.id] = movie;
            });
            return newState
        case LOAD_ONE_MOVIE:
            newState = {...state, oneMovie: {} }
            newState.oneMovie = action.movie
            return newState;
        default:
            return state;
    }
}

export default movie;
