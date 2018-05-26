import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { authReq } from '../store/actions';
class Login extends Component {
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
                    <button onClick={() => this.props.login(this.username.value, this.password.value)}>LOGIN</button>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: authReq
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)

