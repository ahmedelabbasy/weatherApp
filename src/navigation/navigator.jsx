import {navigate} from './index';

export const navigateCityDetails = ({cityName}) => {
  navigate('Details', {cityName});
};
