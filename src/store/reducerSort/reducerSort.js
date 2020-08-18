const initialState = {
  sort: 'cheap',
};

function reducerSort(state = initialState, action) {
  switch (action.type) {
    case 'SORT_CHEAP':
      return { ...state, sort: 'cheap' };
    case 'SORT_FAST':
      return { ...state, sort: 'fast' };
    default:
      return state;
  }
}
export default reducerSort;
