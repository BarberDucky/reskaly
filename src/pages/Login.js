import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    constructor() {
        super()
        this.username = ''
        this.password = ''
        this.state = {redirect: 'login'}
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    render() {
        if (this.state.redirect === 'main') {
            return <Redirect push to='/' />
        } else if (this.state.redirect === 'register') {
            return <Redirect push to='/register' />
        } else {
            return (
                <div className='loginPageDiv' onSubmit={(ev) => this.login(ev)}>
                    <h1>ReSkaly</h1>
                    <h2>Login</h2>
                    <label><span>Username</span><input name='username' ref={(input) => this.username = input} /></label>
                    <label><span>Password</span><input name='password' ref={(input) => this.password = input} /></label>
                    <button onClick={this.login}>LOGIN</button>
                    <button onClick={this.register}>REGISTER</button>
                </div>
            )
        }
    }
    login() {
        console.log({
            username: this.username.value,
            password: this.password.value
        })
        this.setState({ redirect: 'main' })
    }
    register() {
        this.setState({ redirect: 'register' })
    }
}