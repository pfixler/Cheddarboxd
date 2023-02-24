
const LOAD_MOVIE_REVIEWS = 'reviews/LOAD_MOVIE_REVIEWS';
const LOAD_USER_REVIEWS = 'reivews/LOAD_USER_REVIEWS';
const CREATE_REVIEW = 'review/CREATE_REVIEW';
const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const loadMovie = (reviews) => ({
    type: LOAD_MOVIE_REVIEWS,
    reviews
})

const loadUser = (reviews) => ({
    type: LOAD_USER_REVIEWS,
    reviews
})

const create = (review) => ({
    type: CREATE_REVIEW,
    review
})

const update = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const remove = (review) => ({
    type: DELETE_REVIEW,
    review
})

export const loadMovieReviews = (movieId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/movie/${movieId}`)

    if (response.ok) {
        const movieReviews = await response.json();
        dispatch(loadMovie(movieReviews))
    }
}

export const loadUserReviews = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/user/${userId}`)

    if (response.ok) {
        const userReviews = await response.json();
        dispatch(loadUser(userReviews))
    }
}

export const createReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/`, {
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    })
    if (response.ok) {
        const newReview = await response.json()
        dispatch(create(newReview))
    }
}

export const updateReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}`, {
        method:"PUT",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    })
    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(update(updatedReview))
    }
}

export const deleteReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}`, {
        method:"DELETE"
    })

    if (response.ok) {
        dispatch(remove(review))
    }
}


const initialState = { userReviews: {}, movieReviews: {}};
const review = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_MOVIE_REVIEWS:
            newState = {...state, movieReviews: {}};
            action.reviews.Reviews.forEach((review) => {
                newState.movieReviews[review.id] = review;
            })
            return newState;
        case LOAD_USER_REVIEWS:
            newState = {...state, userReviews: {}};
            action.reviews.Reviews.forEach((review) => {
                newState.userReviews[review.id] = review;
            })
            return newState
        case CREATE_REVIEW:
            newState = {...state, movieReviews: {...state.movieReviews}};
            newState.movieReviews[action.review.id] = action.review;
            return newState;
        case UPDATE_REVIEW:
            newState = {...state, movieReviews: {...state.movieReviews}};
            newState.movieReviews[action.review.id] = action.review;
            return newState;
        case DELETE_REVIEW:
            newState = {...state, movieReviews: {...state.movieReviews}};
            delete newState.movieReviews[action.review.id]
            return newState;
        default:
            return state;
    }
}

export default review
