import * as actions from '../actions/index'

const initialState = {id: "", scales:[]} 

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.DELETE_SUBJECT: 
        {
            return initialState
        }
        case actions.LOGOUT_KEY:
        {
            return initialState
        }
        case actions.SUBJECT_DESELECTED: 
        {
            return initialState
        }
        case actions.SCALES_LOADED:    
        {
            return {id: action.payload.id, scales:[...action.payload.scales]}
        }
        default:
            {
                return state
            }
    }
}