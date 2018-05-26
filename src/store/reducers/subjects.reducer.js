import * as actions from '../actions/index'

const initialState = [{
    name: 'trt',
    selector: [
        {
            name: 'prt'
        }
    ],
    scales: [
        [{
            name: 'prt'
        }]
    ]
}]

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SUBJECT_SUBMIT:
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