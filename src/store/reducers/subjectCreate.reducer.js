import * as actions from '../actions/index'

export default function (state = {subject: {}, index: -1, selected: false}, action) {
    switch (action.type) {
        case actions.SUBJECT_ADDED:
            {
                if(action.payload){
                    return {subject: action.payload.subject, index: action.payload.index, selected: true}
                } else {
                    return {subject: {}, index: -1, selected: true}
                }
            }
        case actions.SUBJECT_DESELECTED:
            {
                return {subject: {}, index:-1, selected: false}
            }
        case actions.SUBJECT_DELETED:
            {
                return {subject: {}, index:-1, selected: false}
            }
        case actions.SUBJECT_SUBMIT:
            {
                return {subject: {}, index:-1, selected: false}
            }
        case actions.SUBJECT_UPDATED: 
            {
                return {subject: {}, index:-1, selected: false}
            }
        case actions.POST_SUBJECT: 
            {
                return {subject: {}, index:-1, selected: false}
            }
        default:
            {
                return state
            }
    }
}