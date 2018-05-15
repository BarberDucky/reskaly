import React, { Component } from 'react'
import Assignments from '../model/Assignments'
import SelectorCell from './SelectorCell'
import { bindActionCreators } from 'redux';
import { boxAdded, boxDeleted } from '../store/actions';
import {connect} from 'react-redux'
class Selector extends Component {
    constructor() {
        super()
    }
    render() {
        let assignments = this.props.selector
            .map((assignment, index) => {
                return (<SelectorCell
                    color={assignment.color}
                    upperText={assignment.text[0]}
                    lowerText={assignment.text} 
                    listId={index}
                    />)
            })

        return (
            <div className='selector'>
                <button className='selectorAddButton' onClick={() => this.props.add({text:'Trt', color: 'black'})}> + </button>
                {assignments}
                {assignments}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        selector: state.selector
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        add: boxAdded,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)