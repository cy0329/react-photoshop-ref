import { combineReducers } from 'redux';
import filterImage from './imageFilter';
import toggleToolbar from './openToolbar';

const rootReducer = combineReducers({
  filterImage,
  toggleToolbar
});

export default rootReducer;