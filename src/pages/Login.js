import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { authReq, registerKey } from '../store/actions';
class Login extends Component {
    constructor() {
        super()
        this.username = ''
        this.password = ''
    }
    render() {
            return (
                <div className='loginPageDiv' onSubmit={(ev) => this.login(ev)}>
                    <h1>ReSkaly</h1>
                    <h2>Login</h2>
                    <label><span>Username</span><input name='username' ref={(input) => this.username = input} /></label>
                    <label><span>Password</span><input name='password' ref={(input) => this.password = input} /></label>
                    <button onClick={() => this.props.login(this.username.value, this.password.value)}>LOGIN</button>
                    <button onClick={() => this.props.register()}>REGISTER</button>
                </div>
            )
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: authReq,
        register: registerKey
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)

