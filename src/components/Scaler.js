import React, { Component } from 'react'
import Row from './Row'
import {FloatingActionButton} from 'material-ui'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { scaleAdded } from '../store/actions';
class Scaler extends Component {
    constructor() {
        super()
    }
    render() {
        let rows = this.props.scales
            .map((element, index) => 
                <Row listId={index}/>
            )

        return (
            <div className='scalerContainer'>
                <div className='scaler'>
                    {rows}
                    <div className='pointDiv'>
                        <label><span>Earned Points</span><input /></label>
                        <label><span>Maximum possible points</span><input /></label>
                        <button>Submit</button>
                        <button>Cancel</button>
                    </div>
                    <span>Osvojeni poeni:</span>
                    <button>Calculate</button>
                </div>
                <button className='scaleAddButton' onClick={() => {this.props.add({}); console.log(this.props.scales)}}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        scales: state.scales
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: scaleAdded
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Scaler)