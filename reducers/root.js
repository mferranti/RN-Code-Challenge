import {combineReducers} from 'redux';
import cocktailsReducer from './cocktails';
import detailsReducer from './details';

export default combineReducers({
  cocktails: cocktailsReducer,
  details: detailsReducer,
});
