import React, { Component } from 'react'
export default class SelectorCell extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{color: this.props.color}} 
                className='assignDiv'>
                <div className='upperText'>{this.props.upperText}</div>
                <div className='lowerText'>{this.props.lowerText}</div>
            </div>
        )
    }
}