import * as actions from '../actions/index'

export default function (state = null, action) {
    switch (action.type) {
        case actions.AUTH_SUCC: 
        {
            return action.payload.subjects
        }
        case actions.POST_SUBJECT:
            {
                return [...state, action.payload.subject]
            }
        case actions.SUBJECT_UPDATED: 
            {
                return state.map((element, index) => {
                    if(index === action.payload.index) {
                        return action.payload.subject
                    } else {
                        return element
                    }
                })
            }
        case actions.SUBJECT_DELETED:
            {   
                return state.filter((element, index) => index !== action.payload)
            }
        default: 
        {
            return state
        }
    }
}