import * as actions from '../actions/index'

export default function (state = {cellId: null, points: 0, selected: false}, action) {
    switch (action.type) {
        case actions.CELL_SELECTED:
            {
                if (action.payload) {
                    return {cellId: action.payload.cellId, points: action.payload.points, selected: true}
                } else {
                    return {cellId: null, points: 0, selected: true}
                }
            }
        case actions.CELL_SUBMIT: 
            {
                return {cellId: null, points: 0, selected: false}
            }
        case actions.CELL_DESELECTED: 
            {
                return {cellId: null, points: 0, selected: false}
            }
        default: 
        {
            return state
        }
    }
}