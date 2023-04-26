import React, { useEffect } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { COLORS } from '../../common';
import AppTemplate from '../../components/templates/AppTemplate';
import {AppHeader,DetailsItem} from '../../components';
import { calcFont } from '../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getCityDetails } from '../../redux/actions/citiesAction';
import { getAllCityDetails } from '../../redux/selectors/citiesSelectors';

const DetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const cityName = params?.cityName;

  useEffect(() => {
    cityName && fetchData(cityName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const fetchData = () => {
    dispatch(getCityDetails(cityName));
  };
  const backFunc = (city)=>{
    navigation.navigate('auth', {
      screen: 'Cities',
    });
  }

  const cityDetails = useSelector(getAllCityDetails);
  console.log("cityDetails>>>",cityDetails);
  const isLoading = cityDetails?.loading;
  const hasError = cityDetails?.error;
  const timeStamp= cityDetails?.data?.dt;

  return (
    <AppTemplate>
      <AppHeader
        back={true}
        onPressFunc={backFunc}
        title={"Cities"}
      />
      <View style={style.container}>
        {
          !hasError ?
          isLoading?
          <ActivityIndicator size={400} />
          :
          <>
        <Text style={style.city}>{cityName}</Text>
        <View style={style.iconContainer}>
          <View><FontAwesome5 color={COLORS.primary} size={calcFont(76)} name={'cloud-sun'} /></View>
        </View>
        <View style={style.listContainer}>
          <DetailsItem itemName={"Description"} itemValue={cityDetails?.data?.weather[0]?.description}/>
          <DetailsItem itemName={"Temperature"} itemValue={(Number(String(cityDetails?.data?.main.temp))-273.15).toFixed(2).toString()+"'C"}/>
          <DetailsItem itemName={"Humidity"} itemValue={cityDetails?.data?.main.humidity+"%"}/>
          <DetailsItem itemName={"Windspeed"} itemValue={cityDetails?.data?.wind.speed+" km/h"}/>
        </View>
        </>
        :
        <Text style={style.descTxt}>{"Not available now"}</Text>
        }

      </View>
      <View style={style.descContainer}>
          <Text style={style.descTxt}>{"Weather information for "+cityName+" recieved on"}</Text>
          <Text style={style.descTxt}>{Date.parse(timeStamp)}</Text>
        </View>
    </AppTemplate>
  )
}
export default DetailsScreen;
