import React, { Component } from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'
import { scaleDeleted, cellAdded, cellDeleted } from '../store/actions';
import { bindActionCreators } from 'redux';
class Row extends Component {
    render() {
        let cells = this.props.scales
            .find((element, index) => index === this.props.listId)
            .map((element, index) => {
                let box = this.props.selector.find(cell => cell.name === element)
                return <Cell
                    key={`cell${this.props.listId},${index}`}
                    name={box.name}
                    listId={index}
                    parentId={this.props.listId} 
                    width={box.part}/>
            })
        return (
            <div
                className='scale'
                onDragOver={ev => ev.preventDefault()}
                onDrop={(ev) => {
                    ev.preventDefault()
                    const selectorId = JSON.parse(ev.dataTransfer.getData('application/json'))
                    this.props.add(selectorId, this.props.listId)
                }}>
                {cells}
                <div className="deleteBox" onClick={(ev) => { this.props.delete(this.props.listId); ev.stopPropagation() }}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        scales: state.scales,
        selector: state.selector
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        delete: scaleDeleted,
        add: cellAdded,
        deleteCell: cellDeleted
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)