import * as actions from '../actions/index'

export default function (state = -1, action) {
    switch (action.type) {
        case actions.SUBJECT_SELECTED:
            {
                return action.payload
            }
        case actions.SUBJECT_DESELECTED:
            {
                return state
            }
        case actions.DELETE_SUBJECT:
            {
                return action.payload.subject.id === state ? -1 : state
            }
        case actions.SUBJECT_SUBMIT:
            {
                return state
            }
        default:
            {
                return state
            }
    }
}