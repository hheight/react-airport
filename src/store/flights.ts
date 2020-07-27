import { Action } from 'redux';

const SET_FLIGHTS = 'SET_FLIGHTS';

type SetFlightsAction = Action<typeof SET_FLIGHTS> & {
  flights: IFlights
}

export const setFlights = (flights: IFlights): SetFlightsAction => {
  return {
    type: SET_FLIGHTS,
    flights
  }
}

const reducer = (flights: IFlights | null = null, action: SetFlightsAction) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return action.flights;

    default:
      return flights;
  }
}

export default reducer;
