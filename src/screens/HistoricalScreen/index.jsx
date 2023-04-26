import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AppTemplate from '../../components/templates/AppTemplate';
import {AppHeader,HistoricalItem} from '../../components';
import { calcHeight } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherHistory } from '../../redux/actions/citiesAction';
import { getAllWeatherHistory } from '../../redux/selectors/citiesSelectors';
import { useRoute } from '@react-navigation/native';
import style from './styles';

const HistoricalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const cityName = params?.cityName;

  useEffect(() => {
    cityName && fetchData(cityName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const fetchData = () => {
    dispatch(getWeatherHistory(cityName));
  };
  const backFunc = ()=>{
    navigation.navigate('auth', {
      screen: 'Cities',
    });
  }


  const history = useSelector(getAllWeatherHistory);
  console.log("history>>>",history);
  const isLoading = history?.loading;
  const hasError = history?.error;
  return (
    <AppTemplate>
      <AppHeader
        back={true}
        onPressFunc={backFunc}
        title={cityName+" Historical"}
      />
      <View style={{ width: "100%", marginTop: calcHeight(10) }}>
      {
          !hasError ?
          isLoading?
          <ActivityIndicator size={400} />
          :
          <>
          <FlatList
        data={history?.data?.hourly}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <HistoricalItem
          dateTime={item.dt}
          weather={item.weather[0]?.description+", "+ (Number(item?.temp)-273.15).toFixed(2)+"'C"}
        />
        )}
        keyExtractor={(item, index) => index + ''}
        contentContainerStyle={style.listContainer}
      />
        </>
        :
      <Text style={style.descTxt}>{"Not available now"}</Text>
    }
      </View>
    </AppTemplate>
  )
}
export default HistoricalScreen;
