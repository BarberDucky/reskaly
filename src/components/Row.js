import React, { Component } from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'
import { scaleDeleted, cellAdded, cellDeleted, cellSelected } from '../store/actions';
import { bindActionCreators } from 'redux';
class Row extends Component {
    render() {
        let cells = this.props.scales.scales
            .find((element, index) => index === this.props.listId)
            .map((element, index) => {
                let box = this.props.selector.selector.find(cell => cell.name === element.name)
                return <Cell
                    key={`cell${this.props.listId},${index}`}
                    name={box.name}
                    points={element.points}
                    listId={index}
                    parentId={this.props.listId}
                    width={box.part}
                    onClick={() => {
                        if (!this.props.isModerator) {
                            this.props.cellSelected({cellId: box.name, points: element.points})
                        }
                    }}
                    />
            })
        return (
            <div
                className='scale'
                onDragOver={(ev) => {
                    if (this.props.isModerator) {
                        ev.preventDefault()
                    }
                }}
                onDrop={(ev) => {
                    ev.preventDefault()
                    const selectorId = JSON.parse(ev.dataTransfer.getData('application/json'))
                    this.props.add(selectorId, this.props.listId, this.props.scales)
                }}>
                {cells}
                <div
                    className="deleteBox"
                    onClick={(ev) => {
                        if (this.props.isModerator) {
                            this.props.delete(this.props.listId, this.props.scales)
                            ev.stopPropagation()
                        }
                    }}>
                    <img src="/img/delete.png" alt="Delete button" />
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        scales: state.scales,
        selector: state.selector,
        isModerator: state.user.isModerator
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        delete: scaleDeleted,
        add: cellAdded,
        deleteCell: cellDeleted,
        cellSelected: cellSelected
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)