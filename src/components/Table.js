import React, { Component } from 'react'
import Cell from './Cell'
export default class Table extends Component {
    constructor() {
        super()
    }
    render() {
        let headers = []
        for (let i = 0; i < 10; i++) {
            headers.push(<th></th>)
        }
        let rows = []
        for (let i = 0; i < 3; i++) {
            let cells = []
            for (let j = 0; j < 10; j++) {
                cells.push(<Cell/>)
            }
            rows.push(<tr>{cells}</tr>)
        }
        return (
            <table>
                <tbody>
                    <tr>
                        {headers}
                    </tr>
                    {rows}
                </tbody>
            </table>
        )
    }
}