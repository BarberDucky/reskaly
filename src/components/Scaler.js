import React, { Component } from 'react'
import Table from './Table'
import Selector from './Selector'
export default class Scaler extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='scaler'>
                <Selector />
                <Table />
                <div className='pointDiv'>
                    <label>Earned Points<input /></label>
                    <label>Maximum possible points<input /></label>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
                <span>Osvojeni poeni:</span>
                <button>Calculate</button>
            </div>
        )
    }
}