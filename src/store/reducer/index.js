import { combineReducers } from 'redux';
import getListSeafood from './getListSeafood';
import getDetailFood from './getDetailFood';

const rootReducer = combineReducers({
  getListSeafood,
  getDetailFood,
});
export default rootReducer;