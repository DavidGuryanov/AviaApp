const initialState = {
  transfer: {
    all: true,
    none: true,
    one: true,
    two: true,
    three: true,
  },
};

function reducerfilter(state = initialState, action) {
  const { all, none, one, two, three } = state.transfer;
  switch (action.type) {
    case 'TRANSFER_ALL':
      if (action.payload) {
        return {
          ...state,
          transfer: { all: action.payload, none: true, one: true, two: true, three: true },
        };
      }
      // case 'TRANSFER_ALL_REMOVE':
      return { ...state, transfer: { all: action.payload, none: false, one: false, two: false, three: false } };

    case 'TRANSFER_NONE':
      if (action.payload) {
        if (one && two && three) {
          return { ...state, transfer: { ...state.transfer, all: true, none: action.payload } };
        }
        return { ...state, transfer: { ...state.transfer, none: action.payload } };
      }
      // case 'TRANSFER_NONE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, none: action.payload } };
      }
      return { ...state, transfer: { ...state.transfer, none: action.payload } };

    case 'TRANSFER_ONE':
      if (action.payload) {
        if (none && two && three) {
          return { ...state, transfer: { ...state.transfer, all: true, one: action.payload } };
        }
        return { ...state, transfer: { ...state.transfer, one: action.payload } };
      }
      // case 'TRANSFER_ONE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, one: action.payload } };
      }
      return { ...state, transfer: { ...state.transfer, one: action.payload } };

    case 'TRANSFER_TWO':
      if (action.payload) {
        if (none && one && three) {
          return { ...state, transfer: { ...state.transfer, all: true, two: action.payload } };
        }
        return { ...state, transfer: { ...state.transfer, two: action.payload } };
      }
      // case 'TRANSFER_TWO_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, two: action.payload } };
      }
      return { ...state, transfer: { ...state.transfer, two: action.payload } };

    case 'TRANSFER_THREE':
      if (action.payload) {
        if (one && two && none) {
          return { ...state, transfer: { ...state.transfer, all: true, three: action.payload } };
        }
        return { ...state, transfer: { ...state.transfer, three: action.payload } };
      }

      // case 'TRANSFER_THREE_REMOVE':
      if (all) {
        return { ...state, transfer: { ...state.transfer, all: false, three: action.payload } };
      }
      return { ...state, transfer: { ...state.transfer, three: action.payload } };

    default:
      return state;
  }
}

export default reducerfilter;
