import * as actions from '../actions/index'

export default function (state = {box: {}, index: -1, selected: false}, action) {
    switch (action.type) {
        case actions.BOX_SELECTED:
            {
                if (action.payload) {
                    return {box: action.payload.box, index: action.payload.index, selected: true}
                } else {
                    return {box: {}, index: -1, selected: true}
                }
            }
        case actions.BOX_SUBMIT: 
            {
                return {box: {}, index: -1, selected: false}
            }
        case actions.BOX_UPDATE: 
            {
                return {box: {}, index: -1, selected: false}
            }
        case actions.BOX_DESELECTED: 
            {
                return {box: {}, index: -1, selected: false}
            }
        default: 
        {
            return state
        }
    }
}