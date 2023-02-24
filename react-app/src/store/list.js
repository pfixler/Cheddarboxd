
const LOAD_ALL_LISTS = 'lists/LOAD_ALL_LISTS'
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
