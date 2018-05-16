import * as actions from '../actions/index'

export default function (state = -1, action) {
    switch (action.type) {
        case actions.SUBJECT_SELECTED:
            {
                console.log(action.payload)
                return action.payload
            }
        case actions.SUBJECT_DESELECTED:
            {
                return -1
            }
        case actions.SUBJECT_DELETED:
            {
                return -1
            }
        case actions.SUBJECT_SUBMIT:
            {
                return 0
            }
        default:
            {
                return state
            }
    }
}