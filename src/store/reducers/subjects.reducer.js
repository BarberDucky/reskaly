import * as actions from '../actions/index'

export default function (state = null, action) {
    switch (action.type) {
        case actions.AUTH_SUCC: 
        {
            return action.payload.subjects
        }
        case actions.POST_SUBJECT_RESOLVE:
            {
                return [...state, action.payload]
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
        case actions.DELETE_SUBJECT:
            {   
                return state.filter(element => element.id !== action.payload.subject.id)
            }
        default: 
        {
            return state
        }
    }
}