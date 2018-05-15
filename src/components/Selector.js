import React, { Component } from 'react'
import Assignments from '../model/Assignments'
import SelectorCell from './SelectorCell'
export default class Selector extends Component {
    constructor() {
        super()
    }
    render() {
        const assignments = Assignments.getAssignments()
            .map((assignment, index) => {
                return (<SelectorCell
                    color={assignment.color}
                    upperText={assignment.text[0]}
                    lowerText={assignment.text} />)
            })

        return (
            <div className='selector'>
                <button className='selectorAddButton'> + </button>
                {assignments}
                {assignments}
            </div>
        )
    }
}