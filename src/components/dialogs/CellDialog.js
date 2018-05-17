import React, { Component } from 'react'
import { Dialog, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cellSelected, cellDeselected, cellSubmit } from '../../store/actions/index'

class SelectorDialog extends Component {
    render() {
        let handleSubmit = (ev) => {
            ev.preventDefault()
            let points =  ev.target.elements.points.value
            console.log(points)
            this.props.submit({ cellId: this.props.cellId, points: points})
            
        }
        return (
            <Dialog
                title={`Input earned points for ${this.props.cellId}`}
                open={this.props.selected}
                onRequestClose={this.props.deselect} >
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <TextField className='dialogInput'
                        hintText="eg. 50"
                        floatingLabelText="Points"
                        name="points"
                        defaultValue={this.props.points}
                    />
                    <br />
                    <FlatButton
                        label="Submit"
                        primary={true}
                        type='submit'
                    />
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onClick={this.props.deselect}
                    />
                </form>
            </Dialog>
        )
    }
}

function mapStateToProps(state) {
    return {
        points: state.cellSelected.points,
        cellId: state.cellSelected.cellId,
        selected: state.cellSelected.selected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: cellSelected,
        deselect: cellDeselected,
        submit: cellSubmit
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorDialog)