import {combineReducers} from 'redux'
import subjectReducer from './subjects.reducer'
import userReducer from './user.reducer'
import selectorReducer from './selector.reducer';
import scalesReducer from './scales.reducer';

const rootReducer = combineReducers({
    subjects: subjectReducer,
    user: userReducer,
    selector: selectorReducer,
    scales: scalesReducer
})

export default rootReducer