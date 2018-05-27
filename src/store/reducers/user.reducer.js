import * as actions from '../actions/index'

export default function (state = null, action) {
    switch (action.type) {
        case actions.AUTH_SUCC:
            {
                return action.payload
            }
        case actions.UPDATE_USER:
        {
            return action.payload
        }
        default: 
        {
            return state
        }
    }
}