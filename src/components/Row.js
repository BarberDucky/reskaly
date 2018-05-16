import React, { Component } from 'react'
import Cell from './Cell'
import {connect} from 'react-redux'
import { scaleDeleted } from '../store/actions';
import { bindActionCreators } from 'redux';
class Row extends Component {
    render() {
        let cells = []
        for (let i = 0; i < 10; i++) {
            cells.push(<Cell key={`cell${i}`}/>)
    }
    return (
        <div className='scale'>
                {cells}
                <div className="deleteBox" onClick={(ev) => {this.props.delete(this.props.listId); ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
        </div>
    
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        delete: scaleDeleted
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Row)