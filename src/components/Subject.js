import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteSubject} from '../store/actions/index'
class Subject extends Component {
    render() {
        return (
            <div 
                className="subjectDiv" 
                onClick={this.props.onClick}
                onDoubleClick={this.props.onDoubleClick}
                style={{border: this.props.selected ? '2px solid black' : 'none'}}>
                <label>
                    {this.props.name}
                </label>

                <div className="deleteBox" onClick={(ev) => {this.props.delete(this.props.user, {id: this.props.name}); ev.stopPropagation()}}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        delete: deleteSubject,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject)