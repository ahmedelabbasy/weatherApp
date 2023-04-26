import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flexDirection: "row", 
        height: calcHeight(72), 
        width: "100%"
    },
    iconContainer:{
        width: calcWidth(72), 
        height: calcHeight(72), 
        justifyContent: "center", 
        alignItems: "center"
    },
    txtContainer:{
        width: calcWidth(288), 
        height: calcHeight(72), 
        justifyContent: "center", 
        alignItems: "flex-start"
    },
    dateTime:{
        fontFamily: "Roboto-Regular", 
        color: COLORS.secondary, 
        fontSize: calcFont(12), 
        letterSpacing: calcFont(0.4), 
    },
    weather:{
        fontFamily: "Roboto-Bold", 
        color: COLORS.black, 
        fontSize: calcFont(14), 
        letterSpacing: calcFont(0.1), 
        lineHeight: calcHeight(24)
    },

});
