import React, { Component } from 'react';
import SideList from '../components/SideList'
import Scaler from '../components/Scaler'
import Selector from '../components/Selector'
import '../css/style.css'
import { bindActionCreators } from 'redux';
import { logoutKey } from '../store/actions';
import {connect} from 'react-redux'

class Main extends Component {
    constructor() {
        super()
        this.state = { sideList: false }
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

            return (
                <div className='mainContainer'>
                    <header>
                        <div className='menuWrapper'>
                            <img className='headerMenu' src='/img/menu.png' alt='menu' onClick={() => this.toggleSide()}/>
                            <h1>ReSkaly</h1>
                        </div>
                        <button onClick={this.props.logout}>Logout</button>
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
    toggleSide() {
        console.log()
        this.setState({ sideList: !this.state.sideList && window.innerWidth < 1200})
    }
    deselect() {
        this.setState({ sideList: false })
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logoutKey
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Main)