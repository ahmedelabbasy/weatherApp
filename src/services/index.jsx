import axios from 'axios';
import {API_KEY, BASE_URL} from '../common';

export const getCityDetailsApi = async cityName => {
  const {data} = await axios.get(
    `${BASE_URL}/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
  );
  return data;
};
export const getCityWeatherHistoricalApi = async (dateTime,lat=51.5085,lon=-0.1257) => {
  let strDate= new Date();
  strDate.setDate(strDate.getDate() - 1);
    var datum = Date.parse(strDate);
    datum = datum/1000;
  const {data} = await axios.get(
    `${BASE_URL}/data/2.5/onecall/timemachine?dt=${datum}&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );
  return data;
};
