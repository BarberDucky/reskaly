import React, { Component } from 'react'
import Row from './Row'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { scaleAdded } from '../store/actions';
import CellDialog from './dialogs/CellDialog';
class Scaler extends Component {
    render() {
        let rows = this.props.scales.scales
            .map((element, index) =>
                <Row listId={index} key={`scale${index}`} />
            )
        return (
            <div className='scalerContainer'>
            <CellDialog />
                <div className='scaler'>
                    {rows}
                </div>
                <button 
                    hidden={!this.props.isModerator || this.props.subjectSelected === -1}
                    className='scaleAddButton'
                    onClick={() => this.props.add({})}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        scales: state.scales,
        isModerator: state.user.isModerator,
        subjectSelected: state.subjectSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: scaleAdded
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Scaler)