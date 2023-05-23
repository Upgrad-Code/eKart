import { ACTION_TYPES } from "../constants/actionTypes";

const iState = {
  loading: false,
  countries: [],
  error: null
};

export const countriesReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.COUNTRIES_FETCH_START:
      return { ...state, loading: true };
    case ACTION_TYPES.COUNTRIES_FETCH_SUCCESS:
      return { ...state, countries: payload, loading: false };
    case ACTION_TYPES.COUNTRIES_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
