import React, { Component } from 'react'
export default class SubjectInput extends Component {
    render() {
        return (
            <div class="subjectInput">
                <label>
                    {this.props.name}
                </label>

                <div class="deleteBox">
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>
        )
    }
}