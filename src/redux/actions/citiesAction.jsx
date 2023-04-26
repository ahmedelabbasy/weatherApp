import {getCityDetailsApi,getCityWeatherHistoricalApi} from '../../services';
import {
  ADD_NEW_CITY,
  REMOVE_CITY,
  ADD_CITY_DETAILS_SUCCESS,
  ADD_CITY_DETAILS_ERROR,
  ADD_CITY_DETAILS_START,
  ADD_WEATHER_HISTORY_SUCCESS,
  ADD_WEATHER_HISTORY_ERROR,
  ADD_WEATHER_HISTORY_START,
} from '../types';

export const addNewCity = (cities, addedItem) => async dispatch => {
  const data = [...cities, addedItem];
  dispatch({type: ADD_NEW_CITY, payload: data});
};

export const removeCity = (cities, deletedItem) => async dispatch => {
  const data = cities.filter(item => item !== deletedItem);
  dispatch({type: REMOVE_CITY, payload: data});
};

export const getCityDetails = cityName => async dispatch => {
  dispatch({type: ADD_CITY_DETAILS_START});
  const details = await getCityDetailsApi(cityName);
  if (details) {
    dispatch({type: ADD_CITY_DETAILS_SUCCESS, payload: details});
  } else {
    dispatch({type: ADD_CITY_DETAILS_ERROR, payload: {}});
  }
};

export const getWeatherHistory = cityName => async dispatch => {
  dispatch({type: ADD_WEATHER_HISTORY_START});
  const history = await getCityWeatherHistoricalApi(cityName);
  if (history) {
    dispatch({type: ADD_WEATHER_HISTORY_SUCCESS, payload: history});
  } else {
    dispatch({type: ADD_WEATHER_HISTORY_ERROR, payload: {}});
  }
};
