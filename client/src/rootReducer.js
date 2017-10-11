import { combineReducers } from 'redux';
import search from './containers/search/search.reducers';
import results from './containers/results/results.reducers';

export default combineReducers({ search, results });
