import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFlights } from '../store';
import FlightsTable from './FlightsTable';

export default function Flights() {
  const dispatch = useDispatch();
  const showFlights = useSelector(loadFlights);

  useEffect(() => {
    showFlights(dispatch)
  }, []);
  
  return (
    <FlightsTable />
  )
}
