import * as actions from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case actions.SCALE_ADDED:
            {
                return [...state, action.payload]
            }
        case actions.SCALE_DELETED:
            {
                return state.filter((element, index) => index !== action.payload)
            }
        default: 
        {
            return state
        }
    }
}