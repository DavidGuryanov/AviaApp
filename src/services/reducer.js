const reducer = (state, action) => {
  if (state === undefined) {
    return {
      sort: 'cheap',
      transfer: {
        all: false,
        none: false,
        one: false,
        two: false,
        three: false,
      },
    };
    // return 0;
  }
  const { all, none, one, two, three } = state.transfer;
  // const { sort } = state;
  switch (action.type) {
    case 'SORT_CHEAP':
      return { ...state, sort: 'cheap' };
    case 'SORT_FAST':
      return { ...state, sort: 'fast' };

    case 'TRANSFER_ALL':
      return { ...state, transfer: { all: true, none: true, one: true, two: true, three: true } };
    case 'TRANSFER_ALL_REMOVE':
      return { ...state, transfer: { all: false, none: false, one: false, two: false, three: false } };

    case 'TRANSFER_NONE':
      if (one && two && three) {
        return { ...state, transfer: { ...state.transfer, all: true, none: true } };
      }
      return { ...state, transfer: { ...state.transfer, none: true } };
    case 'TRANSFER_NONE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, none: false } };
      }
      return { ...state, transfer: { ...state.transfer, none: false } };

    case 'TRANSFER_ONE':
      if (none && two && three) {
        return { ...state, transfer: { ...state.transfer, all: true, one: true } };
      }
      return { ...state, transfer: { ...state.transfer, one: true } };
    case 'TRANSFER_ONE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, one: false } };
      }
      return { ...state, transfer: { ...state.transfer, one: false } };

    case 'TRANSFER_TWO':
      if (none && one && three) {
        return { ...state, transfer: { ...state.transfer, all: true, two: true } };
      }
      return { ...state, transfer: { ...state.transfer, two: true } };
    case 'TRANSFER_TWO_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, two: false } };
      }
      return { ...state, transfer: { ...state.transfer, two: false } };

    case 'TRANSFER_THREE':
      if (one && two && none) {
        return { ...state, transfer: { ...state.transfer, all: true, three: true } };
      }
      return { ...state, transfer: { ...state.transfer, three: true } };
    case 'TRANSFER_THREE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, three: false } };
      }
      return { ...state, transfer: { ...state.transfer, three: false } };

    default:
      return state;
  }
};

export default reducer;
