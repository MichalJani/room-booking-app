import { MAKE_RESERVATION, GET_RESERVATIONS } from "./actions";

export const makeReservation = payload => {
  return {
    type: MAKE_RESERVATION,
    payload
  };
};

export const getReservations = payload => {
  return {
    type: GET_RESERVATIONS,
    payload
  };
};
