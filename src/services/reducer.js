import { combineReducers } from 'redux';

function sort(state, action) {
  if (state === undefined) {
    return {
      sort: 'cheap',
    };
  }

  // const { sort } = state;
  switch (action.type) {
    case 'SORT_CHEAP':
      return { ...state, sort: 'cheap' };
    case 'SORT_FAST':
      return { ...state, sort: 'fast' };
    default:
      return state;
  }
}

function filter(state, action) {
  if (state === undefined) {
    return {
      transfer: {
        all: true,
        none: true,
        one: true,
        two: true,
        three: true,
      },
    };
  }
  const { all, none, one, two, three } = state.transfer;
  switch (action.type) {
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
}

function getTickets(state = { isFetching: false, id: '', tickets: [], stop: false, error: false }, action) {
  switch (action.type) {
    case 'REQUEST_ID':
      return { ...state, isFetching: true };
    case 'RECIEVE_ID':
      return { ...state, isFetching: true, id: action.result };
    case 'RECIEVE_TICKETS': {
      const newTickets = state.tickets;
      newTickets.push(...action.tickets.tickets);
      if (action.tickets.stop) {
        return { ...state, isFetching: false, tickets: newTickets, stop: action.tickets.stop };
      }
      return { ...state, isFetching: true, tickets: newTickets, stop: action.tickets.stop };
    }
    case 'ERROR': {
      return { ...state, isFetching: false, error: true };
    }
    default:
      return state;
  }
}

const reducer = combineReducers({
  sort,
  filter,
  getTickets,
});

export default reducer;
