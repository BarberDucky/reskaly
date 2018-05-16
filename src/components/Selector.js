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
                    color={'black'}
                    upperText={assignment.name[0]}
                    lowerText={assignment.name}
                    listId={index}
                    key={`selector${index}`}
                    onClick={() => this.props.select({box: this.props.selector[index], index: index})} />
                )
            })
        
        return (
            <div className='selector'>
                <SelectorDialog />
                <button className='selectorAddButton' onClick={() => this.props.select()}> + </button>
                {assignments}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selector: state.selector
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: boxSelected
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)