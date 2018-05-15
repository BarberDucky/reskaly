import React, { Component } from 'react'
export default class Cell extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <td>
                <div className='upperText'>{this.props.upperText}</div>
                <div className='lowerText'>{this.props.lowerText}</div>
            </td>
        )
    }
}