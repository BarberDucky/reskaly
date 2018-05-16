import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { subjectSubmit, subjectSelected, subjectAdded} from '../store/actions/index'
import Subject from './Subject'
import SubjectDialog from './dialogs/SubjectDialog'
class SideList extends Component {
    render() {
        const subjects = this.props.subjects.map((subject, index) =>
            <Subject 
                name = {subject.name} 
                key={`subject${index}`} 
                listId={index} 
                onClick={() => this.props.select(index)}
                onDoubleClick={() => this.props.add({subject: this.props.subjects[index], index: index})}
                selected={this.props.selected === index}/>
        )
        return (
            <div className="sideList" style={{left: this.props.position}}>
                <SubjectDialog />
                <button className='subjectAddButton' onClick={() => this.props.add()}> + </button>
                {subjects}
            </div>
        )
    }
}
    
function mapStateToProps(state) {
    return {
        subjects: state.subjects,
        selected: state.subjectSelected,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submit: subjectSubmit,
        select: subjectSelected,
        add: subjectAdded
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideList)