/// <reference types="react-scripts" />

interface IFlightsFromServer {
  body: IFlights
  error: {
    code: number
  }
}

interface IFlights {
  departure: IDeparture[]
  arrival: IArrival[]
}

interface IDeparture {
  "ID": number
  "fltNo": string
  "fltTypeID.code": string
  "fltTypeID.name": string
  "fltCatID.code": string
  "fltCatID.name": string
  "planeTypeID.code": string
  "planeTypeID.IATA": string
  "planeTypeID.name": string
  "planeNo": string
  "airportToID.code": string
  "airportToID.IATA": string
  "airportToID.name": string
  "checkinNo": string
  "gateNo": string
  "term": string
  "standID.code": string
  "carrierID.code": string
  "carrierID.IATA": string
  "timeDepShedule": string
  "timeBoard": string
  "timeDepExpectCalc": string
  "timeDepFact": string
  "timeTakeofFact": string
  "timeToStand": string
  "timeLandFact": string
  "delayReasonID.code": string
  "delayReasonID.name": string
  "psgCount": number
  "cargoCount": number
  "mailCount": number
  "bagCount": number
  "bagWeigth": number
  "handlerID.code": string
  "handlerID.name": string
  "actual": string
  "status": string
  "airportToID.name_en": string
  "airportToID.city": string
  "airportToID.city_en": string
  "airportToID.city_ru": string
  "showOnSite": number
  "logo": string
  "airline": {
    [key: string]: IAirline
  }
  "codeShareData": ICodeShareData[]
  "delay": boolean
}

interface IArrival {
  "fltNo": string
  "fltTypeID.code": string
  "fltTypeID.name": string
  "fltCatID.code": string
  "fltCatID.name": string
  "planeTypeID.code": string
  "planeTypeID.IATA": string
  "planeTypeID.name": string
  "planeNo": string
  "airportFromID.code": string
  "airportFromID.IATA": string
  "airportFromID.name": string
  "term": string
  "standID.code": string
  "carrierID.code": string
  "carrierID.IATA": string
  "timeArrShedule": string
  "timeArrExpectCalc": string
  "timeToStand": string
  "timeLandCalc": string
  "timeStandCalc": string
  "actual": string
  "status": string
  "airportFromID.name_en": string
  "airportFromID.city": string
  "airportFromID.city_en": string
  "airportFromID.city_ru": string
  "ID": number,
  "showOnSite": number
  "belt": string
  "logo": string
  "airline": {
    [key: string]: IAirline
  }
  "codeShareData": ICodeShareData[]
}

interface IAirline {
  "id": number
  "name": string
  "icao": string
  "about": string
  "logoName": string
  "logoSmallName": string
  "locale": string
  "showOnSite": boolean
  "createdAt": number
  "updatedAt": number
}

interface ICodeShareData {
  "icao": string
  "codeShare": string
  "logo": string
  "airline": {
    [key: string]: Airline
  }
}
