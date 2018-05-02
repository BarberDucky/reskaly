import React, { Component } from 'react';
import SideList from '../components/SideList'
import Scaler from '../components/Scaler'
import { Redirect } from 'react-router-dom'
import '../css/style.css'

export default class Main extends Component {
    constructor() {
        super()
        this.state = { redirect: 'main' }
        this.logout = this.logout.bind(this)
    }
    render() {
        if (this.state.redirect === 'login') {
            return <Redirect push to='/login' />
        } else {

            return (
                <div className="mainDiv">
                    <header>
                        <h1>ReSkaly</h1>
                        <h2>User</h2>
                        <button onClick={this.logout}>Logout</button>
                    </header>
                    <div className='contentHolder'>
                        <SideList />
                        <Scaler />
                    </div>
                </div>
            )
        }
    }
    logout() {
        this.setState({ redirect: 'login' })
    }
}
