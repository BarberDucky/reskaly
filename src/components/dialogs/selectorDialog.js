import React, { Component } from 'react'
import { Dialog, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { boxSelected, boxDeselected, boxSubmit, boxUpdate, cellUpdated, subjectUpdated, selectorUpdated } from '../../store/actions/index'

class SelectorDialog extends Component {
    constructor() {
        super()
        this.state = { name: '', max: 0, num: 0, part: 0 }
    }
    render() {
        let handleSubmit = (ev) => {
            ev.preventDefault()
            let box = {
                name: ev.target.elements.name.value,
                max: ev.target.elements.max.value,
                num: ev.target.elements.num.value,
                part: ev.target.elements.part.value
            }
            if (this.props.index !== -1) {
                this.props.update(box, this.props.selector)
                /*this.props.updateCells(this.props.box.name, box.name)
                this.props.updateSelector(this.props.selector)*/
            } else {
                this.props.submit(box, this.props.selector)
            }
        }
        return (
            <Dialog
                title='Create new box'
                open={this.props.selected}
                onRequestClose={this.props.deselect} >
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <TextField className='dialogInput'
                        hintText="eg. Exam"
                        floatingLabelText="Name"
                        name="name"
                        defaultValue={this.props.box.name}
                        disabled = {this.props.index !== -1}
                    />
                    <TextField className='dialogInput'
                        hintText="eg. 4"
                        floatingLabelText="Number of parts"
                        name="num"
                        defaultValue={this.props.box.num}
                    />
                    <TextField className='dialogInput'
                        hintText="eg. 100"
                        floatingLabelText="Maximum achievable"
                        name="max"
                        defaultValue={this.props.box.max}
                    />
                    <TextField className='dialogInput'
                        hintText="eg. 30"
                        floatingLabelText="Points from final grade"
                        name="part"
                        defaultValue={this.props.box.part}
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
        box: state.boxSelected.box,
        index: state.boxSelected.index,
        selected: state.boxSelected.selected,
        selectedSubject: state.subjectSelected,
        subjects: state.subjects,
        selector: state.selector
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: boxSelected,
        deselect: boxDeselected,
        submit: boxSubmit,
        update: boxUpdate,
        updateCells: cellUpdated,
        updateSubject: subjectUpdated,
        updateSelector: selectorUpdated
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorDialog)