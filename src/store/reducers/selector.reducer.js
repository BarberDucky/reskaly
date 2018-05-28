import * as actions from '../actions/index'

const initialState = {id: "", selector: []}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SELECTOR_LOADED: 
            {
                return {id: action.payload.id, selector: [...action.payload.selector]}
            }
        case actions.DELETE_SUBJECT: 
        {
            return initialState
        }
        case actions.SUBJECT_DESELECTED: {
            return initialState
        }
        default: 
        {
            return state
        }
    }
}