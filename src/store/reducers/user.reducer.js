import * as actions from '../actions/index'

export default function (state = {isModerator: true, subjects: []}, action) {
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