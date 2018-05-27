import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cancelKey, regReq } from '../store/actions';
class Register extends Component {
    constructor() {
        super()
        this.username = ''
        this.password = ''
    }
    render() {
        return (
            <div className='regPageDiv'>
                <h1>ReSkaly</h1>
                <h2>Register</h2>
                <label><span>Username</span><input name='username' ref={(input) => this.username = input} /></label>
                <label><span>Password</span><input name='password' ref={(input) => this.password = input} /></label>
                <label className='checkbox'>Are you a moderator?<input type='checkbox' /></label>
                <button onClick={() => this.props.register(this.username.value, this.password.value)}>REGISTER</button>
                <button onClick={this.props.cancel}>BACK</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: regReq,
        cancel: cancelKey
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)