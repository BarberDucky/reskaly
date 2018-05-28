import React, { Component } from 'react'
import { Dialog, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cellSelected, cellDeselected, cellSubmit } from '../../store/actions/index'

class CellDialog extends Component {
    render() {
        let userPoints
        if (this.props.cell !== null){
         userPoints = this.props.user
            .subjects.find(element => element.id === this.props.selectedSubject)
            .points.find(element => element.name === this.props.cell)
        } else {
            userPoints = {points: 0}
        }
        
        let handleSubmit = (ev) => {
            ev.preventDefault()
            let points =  ev.target.elements.points.value
            console.log(points)
            this.props.submit({name: userPoints.name, points: points}, this.props.selectedSubject, this.props.user)
        }
        return (
            <Dialog
                title={`Input earned points for ${this.props.cell}`}
                open={this.props.selected}
                onRequestClose={this.props.deselect} >
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <TextField className='dialogInput'
                        hintText="eg. 50"
                        floatingLabelText="Points"
                        name="points"
                        defaultValue={userPoints.points}
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
        cell: state.cellSelected.cellId,
        selected: state.cellSelected.selected,
        user: state.user,
        selectedSubject: state.subjectSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: cellSelected,
        deselect: cellDeselected,
        submit: cellSubmit
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CellDialog)