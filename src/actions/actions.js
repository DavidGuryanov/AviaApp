export const sortCheap = () => {
  return { type: 'SORT_CHEAP' };
};
export const sortFast = () => {
  return { type: 'SORT_FAST' };
};
export const transferAll = (bool) => {
  return { type: 'TRANSFER_ALL', payload: bool };
};
// export const transferAllRemove = () => {
//   return { type: 'TRANSFER_ALL_REMOVE' };
// };
export const transferNone = (bool) => {
  return { type: 'TRANSFER_NONE', payload: bool };
};
// export const transferNoneRemove = () => {
//   return { type: 'TRANSFER_NONE_REMOVE' };
// };
export const transferOne = (bool) => {
  return { type: 'TRANSFER_ONE', payload: bool };
};
// export const transferOneRemove = () => {
//   return { type: 'TRANSFER_ONE_REMOVE' };
// };
export const transferTwo = (bool) => {
  return { type: 'TRANSFER_TWO', payload: bool };
};
// export const transferTwoRemove = () => {
//   return { type: 'TRANSFER_TWO_REMOVE' };
// };
export const transferThree = (bool) => {
  return { type: 'TRANSFER_THREE', payload: bool };
};
// export const transferThreeRemove = () => {
//   return { type: 'TRANSFER_THREE_REMOVE' };
// };
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
    return (
      fetch('https://front-test.beta.aviasales.ru/search')
        .then((response) => response.json())
        .then((json) => dispatch(recieveID(json.searchId)))
        // eslint-disable-next-line no-use-before-define
        .then(() => dispatch(fetchData()))
    );
  };
}
export const recieveTickets = (ticket) => {
  return {
    type: 'RECIEVE_TICKETS',
    tickets: ticket,
  };
};
export function fetchTickets(id) {
  return (dispatch) => {
    dispatch(requestID());
    // eslint-disable-next-line consistent-return
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
        // eslint-disable-next-line no-use-before-define
        .then(() => dispatch(fetchData()));
    });
  };
}

// eslint-disable-next-line consistent-return
function shouldFetchTickets(state) {
  const { stop, isFetching } = state.reducerGetTickets;
  if (!stop) {
    return true;
  }
  if (isFetching) {
    return false;
  }
}

export function fetchData() {
  return (dispatch, getState) => {
    if (!getState().reducerGetTickets.id) {
      return dispatch(fetchID());
    }
    if (shouldFetchTickets(getState())) {
      return dispatch(fetchTickets(getState().reducerGetTickets.id));
    }
    return Promise.resolve();
  };
}
