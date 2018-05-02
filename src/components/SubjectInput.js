import React, { Component } from 'react'
export default class SubjectInput extends Component {
    render() {
        return (
            <div className="subjectInput">
                <label>Subject name
                    <input />
                </label>
                <button>Submit subject</button>
                <button>Cancel</button>
            </div>
        )
    }
}