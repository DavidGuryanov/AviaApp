export const sortCheap = () => {
  return { type: 'SORT_CHEAP' };
};
export const sortFast = () => {
  return { type: 'SORT_FAST' };
};
export const transferAll = () => {
  return { type: 'TRANSFER_ALL' };
};
export const transferAllRemove = () => {
  return { type: 'TRANSFER_ALL_REMOVE' };
};
export const transferNone = () => {
  return { type: 'TRANSFER_NONE' };
};
export const transferNoneRemove = () => {
  return { type: 'TRANSFER_NONE_REMOVE' };
};
export const transferOne = () => {
  return { type: 'TRANSFER_ONE' };
};
export const transferOneRemove = () => {
  return { type: 'TRANSFER_ONE_REMOVE' };
};
export const transferTwo = () => {
  return { type: 'TRANSFER_TWO' };
};
export const transferTwoRemove = () => {
  return { type: 'TRANSFER_TWO_REMOVE' };
};
export const transferThree = () => {
  return { type: 'TRANSFER_THREE' };
};
export const transferThreeRemove = () => {
  return { type: 'TRANSFER_THREE_REMOVE' };
};
export const requestID = () => {
  return {
    type: 'REQUEST_ID',
  };
};
export const recieveID = (json) => {
  return {
    type: 'RECIEVE_ID',
    result: json,
    receivedAt: Date.now(),
  };
};

export const errorOccured = (errorObj) => {
  return {
    type: 'ERROR',
    error: errorObj,
  };
};

export function fetchID() {
  return (dispatch) => {
    dispatch(requestID());
    return fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then((json) => dispatch(recieveID(json.searchId)))
      .then(() => dispatch(fetchData()));
  };
}
export const recieveTickets = (ticket) => {
  return {
    type: 'RECIEVE_TICKETS',
    tickets: ticket,
  };
};
export function fetchTickets(id) {
  return function (dispatch) {
    dispatch(requestID());
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`).then((response) => {
      if (!response.ok) {
        dispatch(errorOccured(response.status));
        return response;
      }
      response
        .json()
        .then((json) => {
          dispatch(recieveTickets(json));
        })
        .then(() => dispatch(fetchData(id)));
    });
  };
}

function shouldFetchTickets(state, id) {
  const { tickets, stop, isFetching } = state.getTickets;
  if (!stop) {
    return true;
  }
  if (isFetching) {
    return false;
  }
}

export function fetchData() {
  return (dispatch, getState) => {
    if (!getState().getTickets.id) {
      return dispatch(fetchID());
    }
    if (shouldFetchTickets(getState(), getState().getTickets.id)) {
      return dispatch(fetchTickets(getState().getTickets.id));
    }
    return Promise.resolve();
  };
}
