import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {subjectAdded, subjectSelected, subjectDeleted} from '../store/actions/index'
import Subject from './Subject'
import SubjectInput from './SubjectInput'
class SideList extends Component {
    render() {
        const subjects = this.props.subjects.map((subject, index) =>
            <Subject name = {subject.name} key={index} listId={index}/>
        )
        return (
            <div className="sideList" style={{left: this.props.position}}>
                {subjects}

                <SubjectInput />
                
                <button className='subjectAddButton' onClick={() => this.props.add({name: 'trt'})}> + </button>
            </div>
        )
    }
}
    
function mapStateToProps(state) {
    return {
        subjects: state.subjects
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: subjectAdded
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideList)