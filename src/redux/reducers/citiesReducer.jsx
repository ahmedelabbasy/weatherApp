import {
  ADD_CITY_DETAILS_ERROR,
  ADD_CITY_DETAILS_START,
  ADD_CITY_DETAILS_SUCCESS,
  ADD_WEATHER_HISTORY_ERROR,
  ADD_WEATHER_HISTORY_START,
  ADD_WEATHER_HISTORY_SUCCESS,
  ADD_NEW_CITY,
  REMOVE_CITY,
} from '../types';

const INITIAL_STATE = {
  cities: ["London, UK","Paris, FR","Vienna, AUT"],
  weatherHistory:{
    data: {},
    loading: true,
    error: false,
  },
  cityDetails: {
    data: {},
    loading: true,
    error: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_CITY:
      return {
        ...state,
        cities: action.payload,
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: action.payload,
      };
    case ADD_CITY_DETAILS_START:
      return {
        ...state,
        cityDetails: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case ADD_CITY_DETAILS_SUCCESS:
      return {
        ...state,
        cityDetails: {
          data: action.payload,
          loading: false,
          error: false,
        },
      };
    case ADD_CITY_DETAILS_ERROR:
      return {
        ...state,
        cityDetails: {
          data: {},
          loading: false,
          error: true,
        },
      };
      case ADD_WEATHER_HISTORY_START:
      return {
        ...state,
        weatherHistory: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case ADD_WEATHER_HISTORY_SUCCESS:
      return {
        ...state,
        weatherHistory: {
          data: action.payload,
          loading: false,
          error: false,
        },
      };
    case ADD_WEATHER_HISTORY_ERROR:
      return {
        ...state,
        weatherHistory: {
          data: {},
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};
