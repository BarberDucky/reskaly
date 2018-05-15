import React, { Component } from 'react'
import Cell from './Cell'
export default class Row extends Component {
    constructor() {
        super()
    }
    render() {
        let headers = []
        let row = []
        for (let i = 0; i < 10; i++) {
            headers.push(<th></th>)
            row.push(<Cell />)
        }
        return (
            <table>
                <tbody>
                    <tr>
                        {headers}
                    </tr>
                    <tr>
                        {row}
                    </tr>
                </tbody>
            </table>
        )
    }
}