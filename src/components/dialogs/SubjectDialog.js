import React, { Component } from 'react'
import { Dialog, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { subjectAdded, subjectDeselected, subjectSubmit, subjectUpdated, postSubject } from '../../store/actions/index'

class SelectorDialog extends Component {
    constructor() {
        super()
        this.state = { name: '', max: 0, num: 0, part: 0 }
    }
    render() {
        let handleSubmit = (ev) => {
            ev.preventDefault()
            let subject = {
                id: ev.target.elements.name.value,
            }
            console.log(subject)
            if (this.props.index !== -1) {
                //this.props.update({ subject: subject, index: this.props.index })
            } else {
                this.props.post(this.props.user, subject, this.props.user.isModerator)
            }
        }
        return (
            <Dialog
                title='Create subject'
                open={this.props.selected}
                onRequestClose={this.props.deselect} >
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <TextField className='dialogInput'
                        hintText="eg. Web"
                        floatingLabelText="Name"
                        name="name"
                        defaultValue={this.props.subject.name}
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
        subject: state.subjectCreate.subject,
        index: state.subjectCreate.index,
        selected: state.subjectCreate.selected,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: subjectAdded,
        deselect: subjectDeselected,
        submit: subjectSubmit,
        update: subjectUpdated,
        post: postSubject
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorDialog)