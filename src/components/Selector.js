import React, { Component } from 'react'
import SelectorCell from './SelectorCell'
import { bindActionCreators } from 'redux';
import { boxSelected } from '../store/actions';
import { connect } from 'react-redux'
import SelectorDialog from './dialogs/selectorDialog'
class Selector extends Component {
    render() {
        let assignments = this.props.selector
            .map((assignment, index) => {
                return (<SelectorCell
                    color={'slateblue'}
                    upperText={assignment.name[0]}
                    lowerText={assignment.name}
                    listId={index}
                    key={`selector${index}`}
                    onClick={() => {
                        if (this.props.isModerator) {
                            this.props.select({box: this.props.selector[index], index: index})
                        }
                    }} />
                )
            })
        
        return (
            <div className='selector'>
                <SelectorDialog />
                <button 
                    hidden={!this.props.isModerator}
                    disabled={this.props.subjectSelected === -1}
                    className='selectorAddButton' 
                    onClick={() => {
                        this.props.select()
                    }}> + </button>
                {assignments}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selector: state.selector.selector,
        isModerator: state.user.isModerator,
        subjectSelected: state.subjectSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: boxSelected
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)