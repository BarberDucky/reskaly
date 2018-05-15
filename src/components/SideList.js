import React, {Component} from 'react'
import Subject from './Subject'
import SubjectInput from './SubjectInput'
export default class SideList extends Component {
    constructor() {
        super()
        this.subjects = ['web', 'peb', 'deb']
    }
    render() {
        const subjects = this.subjects.map((subject, index) =>
            <Subject name = {subject} key={index}/>
        )
        return (
            <div className="sideList" style={{left: this.props.position}}>
                {subjects}

                <SubjectInput />
                
                <button className='subjectAddButton'> + </button>
            </div>
        )
    }
}