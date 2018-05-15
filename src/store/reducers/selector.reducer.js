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
        case actions.BOX_ADDED:
            {
                return [action.payload, ...state]
            }
        case actions.BOX_DELETED:
            {
                return state.filter(element => element.text != state[action.payload].text)
            }
    }
    return state
}