import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { subjectSubmit, subjectSelected, subjectAdded, selectorRequested, scalesRequested} from '../store/actions/index'
import Subject from './Subject'
import SubjectDialog from './dialogs/SubjectDialog'
class SideList extends Component {
    render() {
        const subjects = this.props.subjects.map((subject, index) =>
            <Subject 
                name = {subject.id} 
                key={`subject${index}`} 
                listId={index} 
                onClick={() => {
                    this.props.select(subject.id)
                }}
                selected={this.props.selected === subject.id}/>
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
        isModerator: state.user.isModerator
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submit: subjectSubmit,
        select: subjectSelected,
        add: subjectAdded,
        selectorRequested: selectorRequested,
        scalesRequested: scalesRequested
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideList)