import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import style from './styles';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../common';
import { calcFont } from '../../utils';

let CitiesItem = ({ city, infoFunc, hestoryFunc }) => (

  <View style={style.container}>
    <View style={style.iconContainer}>
      <View><FontAwesome5 color={COLORS.primary} size={calcFont(16)} name={'city'} /></View>
    </View>
    <TouchableOpacity
      onPress={hestoryFunc}
      style={style.cityTxtContainer}>
      <Text style={style.cityTxt}>{city}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={infoFunc}
      style={style.iconContainer}>
      <View><FontAwesome5 color={COLORS.primary} size={calcFont(16)} name={'info-circle'} /></View>
    </TouchableOpacity>
  </View>

);

CitiesItem = React.memo(CitiesItem);
export { CitiesItem };

CitiesItem.propTypes = {
  city: PropTypes.string,
  infoFunc: PropTypes.func,
  hestoryFunc: PropTypes.func,
};
