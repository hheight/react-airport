import React, { useEffect } from 'react';
import './App.css';
import { loadFlights } from './store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const showFlights = useSelector(loadFlights);

  useEffect(() => {
    showFlights(dispatch)
  }, []);
  
  return (
    <>
    </>
  );
}

export default App;
