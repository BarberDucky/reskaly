import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Register extends Component {
    constructor() {
        super()
        this.username = ''
        this.password = ''
        this.state = {redirect: 'register'}
        this.register = this.register.bind(this)
        this.back = this.back.bind(this)
    }
    render() {

        if (this.state.redirect === 'login') {
            return <Redirect push to='/login' />
        } else {
            return (
                <div className='regPageDiv'>
                    <h1>ReSkaly</h1>
                    <h2>Register</h2>
                    <label><span>Username</span><input name='username' ref={(input) => this.username = input}/></label>
                    <label><span>Password</span><input name='password' ref={(input) => this.password = input}/></label>
                    <label className='checkbox'>Are you a moderator?<input type='checkbox' /></label>
                    <button onClick={this.register}>REGISTER</button>
                    <button onClick={this.back}>BACK</button>
                </div>
            )
        }

    }
    register() {
        console.log({
            username: this.username.value,
            password: this.password.value
        })
        this.setState({ redirect: 'login' })
    }
    back() {
        this.setState({ redirect: 'login' })
    }
}