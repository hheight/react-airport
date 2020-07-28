import React, { useMemo } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getFlights } from '../store';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
});

type DirectionsOptions = {
  [key: string]: string
}

const directions: DirectionsOptions = {
  '/departures': 'departure',
  '/arrivals': 'arrival'
}

type FligthType = IArrival & IDeparture;

export default function FlightsTable() {
  const classes = useStyles();
  const allFlights = useSelector(getFlights);
  const location = useLocation();

  const calculateTime = (time: string) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const fullTime = `${hours}:${minutes}`;
  
    return fullTime;
  }
  
  const showLocalTime = (flight: FligthType) => {
    const scheduleTime = flight.timeDepShedule || flight.timeToStand;
    const fullTime = calculateTime(scheduleTime);
  
    return fullTime;
  };
  
  const showDestination = (flight: FligthType) => {
    return flight["airportToID.city_en"] || flight["airportFromID.city_en"];
  };
  
  const showStatus = (flight: FligthType) => {
    const scheduleTime = flight.timeDepFact || flight.timeLandFact;
    const fullTime = calculateTime(scheduleTime);
    const status = flight.status;
  
    switch (status) {
      case "ON":
        return "On time";
      case "LN":
        return `Landed ${fullTime}`;
      case "FR":
        return `In flight`;
      case "CK":
        return `Check-in`;
      case "DP":
        return `Departed at ${fullTime}`;
      default:
        return fullTime;
    }
  };

  const direction = useMemo(() => {
    return directions[location.pathname] as keyof IFlights;
  }, [location]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Terminal</StyledTableCell>
            <StyledTableCell>Local time</StyledTableCell>
            <StyledTableCell>Destination</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Airline</StyledTableCell>
            <StyledTableCell>Flight</StyledTableCell>
          </TableRow>
        </TableHead>
        {allFlights &&
          <TableBody>
            {(allFlights[direction] as Array<IDeparture | IArrival>)
              .map((flight) => (
                <StyledTableRow key={flight.ID}>
                  <StyledTableCell>
                    {flight.term}
                  </StyledTableCell>
                  <StyledTableCell>
                    {showLocalTime(flight as FligthType)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {showDestination(flight as FligthType)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {showStatus(flight as FligthType)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {flight.airline.en.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {flight.codeShareData[0].codeShare}
                  </StyledTableCell>
                </StyledTableRow>
            ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  );
}
