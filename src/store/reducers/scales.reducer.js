import * as actions from '../actions/index'

const initialState = [{
        text: 'Kolokv.',
        color: '#b200ff'
    },
    {
        text: 'Ispit',
        color: 'green'
    },
    {
        text: 'Lab',
        color: 'red'
    },
    {
        text: 'Projekat',
        color: 'orange'
    },
    {
        text: 'Domaci',
        color: '#683b11'
    },
    {
        text: 'Ostalo',
        color: 'blue'
    }
]

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SCALE_ADDED:
            {
                return [...state, action.payload]
            }
        case actions.SCALE_DELETED:
            {
                console.log(action.payload)
                return state.filter((element, index) => index != action.payload)
            }
    }
    return state
}