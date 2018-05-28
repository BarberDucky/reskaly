import * as actions from '../actions/index'

const initialState = {id: "", scales:[]} 

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.DELETE_SUBJECT: 
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