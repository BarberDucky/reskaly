import * as actions from '../actions/index'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.USER_LOAD:
            {
                return action.payload
            }
        case actions.SUBJECT_ADDED:
            {
                console.log('sad bi dodali predmet u user')
                return state
            }
        case actions.SUBJECT_DELETED:
            {
                console.log('sad bi obrisali predmet iz user')
                return state
            }
        case actions.SUBJECT_SELECTED:
            {
                console.log(action.payload)
                return state
            }
        case actions.SCALE_ADDED:
            {
                console.log('sad bi dodali skalu u user')
                return state
            }
        case actions.SCALE_DELETED:
            {
                console.log('sad bi obrisali skalu iz user')
                return state
            }
        case actions.BOX_ADDED:
            {
                console.log('sad bi dodali kockicu u user')
                return state
            }
        case actions.BOX_DELETED:
            {
                console.log('sad bi obrisali kockicu iz user')
                return state
            }
        case actions.BOX_SELECTED:
            {
                console.log(action.payload)
                return state
            }
    }
    return state
}