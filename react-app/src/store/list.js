
const LOAD_ALL_LISTS = 'lists/LOAD_ALL_LISTS';
const LOAD_MOVIE_LISTS = 'lists/LOAD_MOVIE_LISTS';
const LOAD_USER_LISTS = 'lists/LOAD_USER_LISTS';
const LOAD_ONE_LIST = 'lists/LOAD_ONE_LIST';
const CREATE_LIST = 'list/CREATE_LIST';
const UPDATE_LIST = 'list/UPDATE_LIST';
const DELETE_LIST = 'list/DELETE_LIST';

const loadAll = (lists) => ({
    type: LOAD_ALL_LISTS,
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

const loadOne = (list) => ({
    type: LOAD_ONE_LIST,
    list
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

export const loadOneList = (listId) => async (dispatch) => {
    const response = await fetch(`/api/lists/${listId}`)

    if (response.ok) {
        const oneList = response.json();
        dispatch(loadOne(oneList))
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


const initialState = { movieLists: {}, userLists: {}, allLists: {}, oneList: {} }

const list = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_LISTS:
            newState = { movieLists: {}, userLists: {}, allLists: {}, oneList: {} }
            action.lists.Lists.forEach((list) => {
                newState.allLists[list.id] = list
            })
            return newState;
        case LOAD_MOVIE_LISTS:
            newState = { movieLists: {}, userLists: {}, allLists: {}, oneList: {} }
            action.lists.Lists.forEach((list) => {
                newState.movieLists[list.id] = list
            })
            return newState;
        case LOAD_USER_LISTS:
            newState = { movieLists: {}, userLists: {}, allLists: {}, oneList: {} }
            action.lists.Lists.forEach((list) => {
                newState.userLists[list.id] = list
            })
            return newState;
        case LOAD_ONE_LIST:
            newState = { ...state, oneList: {} }
            newState.oneList = action.list
            return newState
        case CREATE_LIST:
            newState = { ...state, oneList: {} }
            newState.oneList = action.list
            return newState
        case UPDATE_LIST:
            newState = { ...state, oneList: {...state.oneList} }
            newState.oneList = action.list
            return newState
        case DELETE_LIST:
            newState = { ...state, oneList: {...state.oneList} }
            delete newState.oneList[action.list.id]
            return newState
        default:
            return state

    }
}

export default list;
