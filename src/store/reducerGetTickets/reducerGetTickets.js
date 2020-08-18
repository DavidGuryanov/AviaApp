const initialState = {
  isFetching: false,
  id: '',
  tickets: [],
  stop: false,
  error: false,
};

function reducerGetTickets(state = initialState, action) {
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
export default reducerGetTickets;
