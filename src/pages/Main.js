import React, { Component } from 'react';
import SideList from '../components/SideList'
import Scaler from '../components/Scaler'
import Selector from '../components/Selector'
import { Redirect } from 'react-router-dom'
import '../css/style.css'

export default class Main extends Component {
    constructor() {
        super()
        this.state = { redirect: 'main', sideList: false }
        this.logout = this.logout.bind(this)
        this.toggleSide = this.toggleSide.bind(this)
        window.onresize = () => this.setState({ sideList: this.state.sideList && window.innerWidth < 1200 })
    }
    render() {
        let sideList
        let tint
        let display
        if (this.state.sideList) {
            sideList = '0'
            tint = '0.8'
            display = 'all'
        } else {
            sideList = '-250px'
            tint = '0'
            display = 'none'
        }

        if (this.state.redirect === 'login') {
            return <Redirect push to='/login' />
        } else {
            return (
                <div class='mainContainer'>
                    <header>
                        <div className='menuWrapper'>
                            <img className='headerMenu' src='/img/menu.png' alt='menu' onClick={() => this.toggleSide()}/>
                            <h1>ReSkaly</h1>
                        </div>
                        <button onClick={this.logout}>Logout</button>
                    </header>
                    <div className="mainDiv">
                        <div className='tint' style={{opacity: tint, pointerEvents: display }}onClick={() => this.deselect()}></div>
                        <div className='contentHolder'>
                            <SideList position={sideList}/>
                            <Scaler />
                            <Selector />
                        </div>
                    </div>
                </div>
            )
        }
    }
    logout() {
        this.setState({ redirect: 'login' })
    }
    toggleSide() {
        console.log()
        this.setState({ sideList: !this.state.sideList && window.innerWidth < 1200})
    }
    deselect() {
        this.setState({ sideList: false })
    }
}
