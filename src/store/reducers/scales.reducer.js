import * as actions from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case actions.SCALE_ADDED:
            {
                return [...state, []]
            }
        case actions.SCALE_DELETED:
            {
                return state.filter((element, index) => index !== action.payload)
            }
        case actions.CELL_ADDED:
            {
                return state.map((element, index) => {
                    if (index === action.payload.scaleId) {
                        return [...element, action.payload.cellId]
                    } else {
                        return element
                    }
                })
            }
        case actions.CELL_DELETED:
            {
                return state.map((element, index) => {
                    if (index === action.payload.scaleId) {
                        return element.filter((element, index) => index !== action.payload.cellId)
                    } else {
                        return element
                    }
                })
            }
        case actions.CELL_UPDATED:
            {
                if (action.payload.newId) {
                    return state.map(array => {
                        return array.map(element => {
                            if (element === action.payload.oldId) {
                                return action.payload.newId
                            } else {
                                return element
                            }
                        })
                    })
                } else {
                    return state.map(array => {
                        return array.filter(element => element !== action.payload.oldId)
                    })
                }
            }
        default:
            {
                return state
            }
    }
}