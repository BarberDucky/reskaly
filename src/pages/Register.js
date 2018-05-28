import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cancelKey, regReq } from '../store/actions';
class Register extends Component {
    constructor() {
        super()
        this.username = ''
        this.password = ''
        this.checkbox = false
    }
    render() {
        return (
            <div className='regPageDiv'>
                <h1>ReSkaly</h1>
                <h2>Register</h2>
                <label><span>Username</span><input name='username' ref={(input) => this.username = input} /></label>
                <label><span>Password</span><input type='password' name='password' ref={(input) => this.password = input} /></label>
                <label className='checkbox'>Are you a moderator?<input type='checkbox' name='checkbox'ref={(input) => this.checkbox = input}/></label>
                <button onClick={() => this.props.register(this.username.value, this.password.value, this.checkbox.checked)}>REGISTER</button>
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