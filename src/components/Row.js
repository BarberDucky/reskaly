import React, { Component } from 'react'
import Cell from './Cell'
export default class Row extends Component {
    constructor() {
        super()
    }
    render() {
        let cells = []
        for (let i = 0; i < 10; i++) {
            cells.push(<Cell/>)
    }
    return (
        <div className='scale'>
                {cells}
                <div className="deleteBox">
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
        </div>
    
        )
    }
}