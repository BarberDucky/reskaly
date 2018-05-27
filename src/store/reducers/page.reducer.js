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
        case actions.REG_SUCC: 
        {
            return 'login'
        }
        case actions.REG_FAIL:
        {
            return 'register'
        }
        case actions.REGISTER_KEY: 
        {
            return 'register'
        }
        case actions.CANCEL_KEY:
        {
            return 'login'
        }
        case actions.LOGOUT_KEY:
        {
            return 'login'
        }
        default:
            {
                return state
            }
    }
}