import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import flightsReducer, { setFlights } from './flights';
import { Dispatch } from 'react';
import { fetchFlights } from '../helpers/api';

const rootReducer = combineReducers({
  flights: flightsReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export const getFlights = (state: RootState) => state.flights;

export const loadFlights = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const fetchedFlights = await fetchFlights();
      dispatch(setFlights(fetchedFlights.body));
    } catch (error) {
      console.log(error);
    }
  }
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
