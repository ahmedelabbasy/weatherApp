import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { COLORS } from '../../common';
import AppTemplate from '../../components/templates/AppTemplate';
import {addNewCity} from '../../redux/actions/citiesAction';
import {getCities} from '../../redux/selectors/citiesSelectors';
import {AppHeader,CitiesItem} from '../../components';
import { calcFont } from '../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from "react-native-dialog";

const CitiesScreen = ({navigation}) => {
  const [city, setCity] = useState("")
  const [visible, setVisible] = useState("")
  const dispatch = useDispatch();
  const cities = useSelector(getCities);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const onAddNewCity = () => {
    dispatch(addNewCity(cities, city));
    setCity("")
    toggleModal();
  };
  const infoFunc = (city)=>{
    navigation.navigate('auth', {
      screen: 'Details',
      params: { cityName:city},
    });
  }
  const hestoryFunc = (city)=>{
    navigation.navigate('auth', {
      screen: 'Historical',
      params: { cityName:city},
    });
  }
  const handleCancel = () => {
    setVisible(false);
};

  return (
    <AppTemplate>
      <AppHeader
        back={false}
        title={"Cities"}
      />
      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CitiesItem
        city={item}
        infoFunc={()=>{infoFunc(item)}}
        hestoryFunc={()=>{hestoryFunc(item)}}
        />
        )}
        keyExtractor={(item, index) => index + ''}
        contentContainerStyle={style.listContainer}
      />
      <Dialog.Container visible={visible}>
                <Dialog.Title>City</Dialog.Title>
                <Dialog.Description>
                    Please, Enter your city.
                </Dialog.Description>
                <Dialog.Input
                    secureTextEntry={false}
                    placeholder={"Enter your city."}
                    value={city}
                    onChangeText={(value) => { setCity(value) }}
                    placeholderTextColor={COLORS.gray}
                    keyboardType={"default"}
                />
                <Dialog.Button label="Back" onPress={handleCancel} />
                <Dialog.Button label="Send" onPress={onAddNewCity} />
            </Dialog.Container>
      <TouchableOpacity 
      onPress={toggleModal}
      style={style.fabStyle}>
        <View style={style.plusIcon}><FontAwesome5 color={COLORS.white} size={calcFont(16)} name={'plus'} /></View>
        <Text style={style.addText}>{"Add city"}</Text>
      </TouchableOpacity>
    </AppTemplate>
  )
}
export default CitiesScreen;
