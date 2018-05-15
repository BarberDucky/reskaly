import React, { Component } from 'react'
import Row from './Row'
import {FloatingActionButton} from 'material-ui'
export default class Scaler extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='scalerContainer'>
                <div className='scaler'>
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <div className='pointDiv'>
                        <label><span>Earned Points</span><input /></label>
                        <label><span>Maximum possible points</span><input /></label>
                        <button>Submit</button>
                        <button>Cancel</button>
                    </div>
                    <span>Osvojeni poeni:</span>
                    <button>Calculate</button>
                </div>
                <button className='scaleAddButton'>+</button>
            </div>
        )
    }
}