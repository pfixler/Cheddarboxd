
const LOAD_ALL_LISTS = 'lists/LOAD_ALL_LISTS';
const LOAD_MOVIE_LISTS = 'lists/LOAD_MOVIE_LISTS';
const LOAD_USER_LISTS = 'lists/LOAD_USER_LISTS';
const CREATE_LIST = 'list/CREATE_LIST';
const UPDATE_LIST = 'list/UPDATE_LIST';
const DELETE_LIST = 'list/DELETE_LIST';

const loadAll = (lists) => ({
    type: LOAD_MOVIE_LISTS,
    lists
})

const loadMovie = (lists) => ({
    type: LOAD_MOVIE_LISTS,
    lists
})

const loadUser = (lists) => ({
    type: LOAD_USER_LISTS,
    lists
})

const create = (list) => ({
    type: CREATE_LIST,
    list
})

const update = (list) => ({
    type: UPDATE_LIST,
    list
})

const remove = (list) => ({
    type: DELETE_LIST,
    list
})


export const loadAllLists = () => async (dispatch) => {
    const response = await fetch('/api/lists/');

    if (response.ok) {
        const lists = await response.json();
        dispatch(loadAll(lists))
    }
}


export const loadMovieLists = (movieId) => async (dispatch) => {
    const response = await fetch(`/api/lists/movie/${movieId}`)

    if (response.ok) {
        const movieLists = await response.json();
        dispatch(loadMovie(movieLists))
    }
}

export const loadUserLists = (userId) => async (dispatch) => {
    const response = await fetch(`/api/lists/user/${userId}`)

    if (response.ok) {
        const userLists = await response.json();
        dispatch(loadUser(userLists))
    }
}

export const createList = (list) => async (dispatch) => {
    const response = await fetch(`/api/lists/`, {
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(list),
    })
    if (response.ok) {
        const newList = await response.json()
        dispatch(create(newList))
    }
}

export const updateList = (list) => async (dispatch) => {
    const response = await fetch(`/api/lists/${list.id}`, {
        method:"PUT",
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(list),
    })
    if (response.ok) {
        const updatedList = await response.json()
        dispatch(update(updatedList))
    }
}

export const deleteList = (list) => async (dispatch) => {
    const response = await fetch(`/api/lists/${list.id}`, {
        method:"DELETE"
    })

    if (response.ok) {
        dispatch(remove(list))
    }
}


// const initialState = {  }
