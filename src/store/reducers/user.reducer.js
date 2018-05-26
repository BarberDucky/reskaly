import * as actions from '../actions/index'

const initialState = {
    username: 'damjan',
    password: 'asd',
    isModerator: true,
    subjects: [
        {
            name: 'trt'
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.USER_LOAD:
            {
                return action.payload
            }
        case actions.SUBJECT_ADDED:
            {
                return state
            }
        case actions.SUBJECT_DELETED:
            {
                return state
            }
        case actions.SUBJECT_SELECTED:
            {
                return state
            }
        case actions.SCALE_ADDED:
            {
                return state
            }
        case actions.SCALE_DELETED:
            {
                return state
            }
        case actions.BOX_ADDED:
            {
                return state
            }
        case actions.BOX_DELETED:
            {
                return state
            }
        case actions.BOX_SELECTED:
            {
                return state
            }
        default: 
        {
            return state
        }
    }
}