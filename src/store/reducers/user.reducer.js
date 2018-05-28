import * as actions from '../actions/index'

export default function (state = null, action) {
    switch (action.type) {
        case actions.AUTH_SUCC:
            {
                console.log('who')
                return action.payload
            }
        case actions.UPDATE_USER:
            {
                console.log('who')
                return action.payload
            }
        default:
            {
                return state
            }
    }
}