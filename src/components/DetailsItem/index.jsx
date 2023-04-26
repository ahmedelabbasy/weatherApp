import React from 'react';
import { Text,
    View,
 } from 'react-native';
import style from './styles';
import PropTypes from 'prop-types';

let DetailsItem = ({ itemName, itemValue }) => (

    <View style={style.container}>
        <Text style={style.itemName}>{itemName}</Text>
        <Text style={style.itemValue}>{itemValue}</Text>
    </View>

);

DetailsItem = React.memo(DetailsItem);
export { DetailsItem };

DetailsItem.propTypes = {
    itemName: PropTypes.string,
    itemValue: PropTypes.string,
};
