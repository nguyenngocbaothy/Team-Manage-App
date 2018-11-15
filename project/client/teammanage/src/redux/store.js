import { combineReducers, createStore } from 'redux'

function membersReducer(state = [], action) {
    if (action.type === 'GET_MEMBERS') return action.members;
    if (action.type === 'CREATE_MEMBER') return [...state, action.member];

    return state;
}

function projectsReducer(state = [], action) {
    if (action.type === 'GET_PROJECTS') return action.projects;
    if (action.type === 'CREATE_PROJECT') return [...state, action.project];

    return state;
}

const reducer = combineReducers({
    members: membersReducer,
    projects: projectsReducer
})

export const store = createStore(reducer);