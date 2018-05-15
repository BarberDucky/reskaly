import * as actions from '../actions/index'

const initialState = [{
    name: 'web'
},
{
    name: 'peb'
},
{
    name: 'deb'
}
]

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SUBJECT_ADDED:
            {
                return [...state, action.payload]
            }
        case actions.SUBJECT_DELETED:
            {   
                return state.filter(element=> element.name != state[action.payload].name)
            }
    }
    return state
}