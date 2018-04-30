import React, { Component } from 'react'
export default class Subject extends Component {
    render() {
        return (
            <div class="subjectDiv">
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