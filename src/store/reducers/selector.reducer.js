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
        case actions.BOX_UPDATE:
            {
                return state.map((element, index) => {
                    if (index === action.payload.index) {
                        return action.payload.box
                    } else {
                        return element
                    }
                })
            }
        default: 
        {
            return state
        }
    }
}