import React, {Component} from 'react'
export default class Login extends Component{
    render() {
        return (
            <div className='loginPageDiv'>
                <h1>Skaly</h1>
                <h2>Login</h2>
                <label>Username<input /></label>
                <label>Password<input /></label>
                <button>LOGIN</button>
                <button>REGISTER</button>
            </div>
        )
    }
}