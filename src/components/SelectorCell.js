import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { boxDeleted } from '../store/actions';
class SelectorCell extends Component {
    render() {
        return (
            <div style={{color: this.props.color}} 
                className='assignDiv'
                onClick={this.props.onClick}>
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
        delete: boxDeleted
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectorCell)