import {combineReducers} from 'redux';
import SuperHerosReducer from './superheros_reducer'
export default combineReducers({
    superheros: SuperHerosReducer
})