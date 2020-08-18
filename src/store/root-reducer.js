import { combineReducers } from 'redux';
import reducerFilter from './reducerFilter/reducerFilter';
import reducerSort from './reducerSort/reducerSort';
import reducerGetTickets from './reducerGetTickets/reducerGetTickets';

const reducer = combineReducers({
  reducerSort,
  reducerFilter,
  reducerGetTickets,
});

export default reducer;
