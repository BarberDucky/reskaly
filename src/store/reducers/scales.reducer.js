import * as actions from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case actions.DELETE_SUBJECT: 
        {
            return []
        }
        case actions.SCALES_LOADED:    
        {
            return action.payload
        }
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
                        return [...element, {name: action.payload.cellId, points: 0}]
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
                    let newState =  state.map(array => {
                        return array.map(element => {
                            if (element.name === action.payload.oldId) {
                                return {name: action.payload.newId, points: 0}
                            } else {
                                return element
                            }
                        })
                    })
                    console.log(newState)
                    return newState
                } else {
                    console.log(state)
                    return state.map(array => {
                        return array.filter(element => element.name !== action.payload.oldId)
                    })
                }
            }
        case actions.CELL_SUBMIT:
            {
                return state.map(array => {
                    return array.map(element => {
                        if (element.name === action.payload.cellId) {
                            return {name: element.name, points: action.payload.points}
                        } else {
                            return element
                        }
                    })
                })
            }
        default:
            {
                return state
            }
    }
}