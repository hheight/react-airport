const API_URL = 'https://api.iev.aero/api/flights';

export const fetchFlights = async (): Promise<IFlightsFromServer> => {
  const response = await fetch(`${API_URL}/26-07-2020`);

  return response.json();
}
