import React from 'react';
import { 
    Text,
    View,
 } from 'react-native';
import style from './styles';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../common';
import { calcFont } from '../../utils';

let HistoricalItem = ({ dateTime, weather }) => (

    <View style={style.container}>
          <View style={style.iconContainer}>
            <View><FontAwesome5 color={COLORS.primary} size={calcFont(24)} name={'cloud-sun'} /></View>
          </View>
          <View style={style.txtContainer}>
            <Text style={style.dateTime}>{dateTime}</Text>
            <Text style={style.weather}>{weather}</Text>
          </View>
        </View>

);

HistoricalItem = React.memo(HistoricalItem);
export { HistoricalItem };

HistoricalItem.propTypes = {
    dateTime: PropTypes.string,
    weather: PropTypes.string,
};
