import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFlights } from '../store';
import FlightsTable from './FlightsTable';

export default function FlightsPage() {
  const dispatch = useDispatch();
  const fetchFlights = useSelector(loadFlights);

  useEffect(() => {
    fetchFlights(dispatch)
  }, []);
  
  return (
    <FlightsTable />
  )
}
