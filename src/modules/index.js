import { combineReducers } from 'redux';
import toggleToolbar from './toggleToolbar';
import initImageCanvas from "./initImageCanvas";
import imageFilter from "./imageFilter";

const rootReducer = combineReducers({
  imageFilter,
  toggleToolbar,
  initImageCanvas
});

export default rootReducer;