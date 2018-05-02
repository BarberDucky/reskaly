import React, { Component } from 'react'
export default class Subject extends Component {
    render() {
        return (
            <div className="subjectDiv">
                <label>
                    {this.props.name}
                </label>

                <div className="deleteBox">
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}