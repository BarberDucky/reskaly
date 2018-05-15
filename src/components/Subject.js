import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {subjectAdded, subjectSelected, subjectDeleted} from '../store/actions/index'
class Subject extends Component {
    render() {
        return (
            <div className="subjectDiv" onClick={() => this.props.select(this.props.listId)}>
                <label>
                    {this.props.name}
                </label>

                <div className="deleteBox" onClick={(ev) => {this.props.delete(this.props.listId); ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        delete: subjectDeleted,
        select: subjectSelected
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Subject)