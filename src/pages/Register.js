import React, {Component} from 'react'
export default class Register extends Component{
    render() {
        return (
            <div className='regPageDiv'>
                <h1>Skaly</h1>
                <h2>Register</h2>
                <label>Username<input /></label>
                <label>Password<input /></label>
                <label>Are you a moderator?<input type='checkbox' /></label>
                <button>REGISTER</button>
                <button>BACK</button>
            </div>
        )
    }
}