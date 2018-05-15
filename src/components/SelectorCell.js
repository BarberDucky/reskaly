import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { boxDeleted, boxSelected } from '../store/actions';
class SelectorCell extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{color: this.props.color}} 
                className='assignDiv'
                onClick={() => this.props.select(this.props.listId)}>
                <div className='upperText'>{this.props.upperText}</div>
                <div className='lowerText'>{this.props.lowerText}</div>
                <div 
                    className="deleteBox"
                    onClick={(ev) => {this.props.delete(this.props.listId); ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        delete: boxDeleted,
        select: boxSelected
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectorCell)