import * as actions from '../actions/index'

export default function (state = 'login', action) {
    switch (action.type) {
        case actions.AUTH_SUCC: 
        {
            return 'main'
        }
        case actions.AUTH_FAIL:
        {
            return 'login'
        }

        default:
            {
                return state
            }
    }
}