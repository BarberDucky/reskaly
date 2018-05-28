import * as actions from '../actions/index'

export default function (state = {cellId: null, selected: false}, action) {
    switch (action.type) {
        case actions.CELL_SELECTED:
            {
                if (action.payload) {
                    return {cellId: action.payload.cellId, selected: true}
                } else {
                    return {cellId: null, selected: true}
                }
            }
        case actions.CELL_SUBMIT: 
            {
                return {cellId: null, selected: false}
            }
        case actions.CELL_DESELECTED: 
            {
                return {cellId: null, selected: false}
            }
        default: 
        {
            return state
        }
    }
}