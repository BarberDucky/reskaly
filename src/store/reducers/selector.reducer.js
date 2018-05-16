import * as actions from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case actions.BOX_SUBMIT:
            {
                return [action.payload, ...state]
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
        case actions.BOX_DELETED:
            {
                return state.filter((element, index) => index !== action.payload)
            }
        default: 
        {
            return state
        }
    }
}