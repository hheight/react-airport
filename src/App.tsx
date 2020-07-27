import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Flights from './components/Flights';
import Home from './components/Home';
import Header from './components/Header';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="md" style={{ marginTop: "var(--header-height)" }}>
          <Switch>
            <Route path="/departures" component={Flights} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
