import { combineReducers, createStore } from 'redux'

function membersReducer(state = [], action) {
    if (action.type === 'GET_MEMBERS') return action.members;
    if (action.type === 'CREATE_MEMBER') return [...state, action.member];

    return state;
}

const reducer = combineReducers({
    members: membersReducer
})

export const store = createStore(reducer);