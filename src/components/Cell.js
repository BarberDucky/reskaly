import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from '../../../../AppData/Local/Microsoft/TypeScript/2.8/node_modules/redux';
import { cellDeleted } from '../store/actions';
class Cell extends Component {
    render() {
        return (
            <div className='cell' style={{width: `${this.props.width}%`}}>
                <div className='upperText'>{this.props.name[0]}</div>
                <div className='lowerText'>{this.props.name}</div>
                <div className="deleteBox" onClick={(ev) => {this.props.delete(this.props.listId, this.props.parentId); ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        delete: cellDeleted
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Cell)