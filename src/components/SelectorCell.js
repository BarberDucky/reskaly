import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { boxDeleted, cellUpdated } from '../store/actions';
class SelectorCell extends Component {
    render() {
        return (
            <div style={{color: this.props.color}} 
                className='assignDiv'
                onClick={this.props.onClick}
                draggable={true}
                onDragStart={(ev) => ev.dataTransfer.setData('application/json', JSON.stringify(this.props.lowerText))}>
                
                <div className='upperText'>{this.props.upperText}</div>
                <div className='lowerText'>{this.props.lowerText}</div>
                <div 
                    className="deleteBox"
                    onClick={(ev) => {
                        this.props.delete(this.props.listId);
                        this.props.updateCells(this.props.lowerText) 
                        ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        selector: state.selector
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        delete: boxDeleted,
        updateCells: cellUpdated
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorCell)