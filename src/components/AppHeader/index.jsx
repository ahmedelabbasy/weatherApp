import React from 'react';
import { Text,
    View,
    TouchableOpacity,
 } from 'react-native';
import style from './styles';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { calcFont } from '../../utils';
import { COLORS } from '../../common';

let AppHeader = ({ back, onPressFunc, title }) => (

    <View style={style.container}>
        <TouchableOpacity
            onPress={back && onPressFunc}
            style={style.backIconContainer}
        >
            {back && <FontAwesome5 color={COLORS.white} size={calcFont(16)} name={'arrow-left'} />}
        </TouchableOpacity>
        <Text style={style.title}>{title && title}</Text>
    </View>

);

AppHeader = React.memo(AppHeader);
export { AppHeader };

AppHeader.propTypes = {
    back: PropTypes.bool.isRequired,
    onPressFunc: PropTypes.func,
    title: PropTypes.string,
};
