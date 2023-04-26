import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginBottom: calcHeight(5)
    },
    itemName:{
        fontFamily: "Roboto-Bold", 
        marginStart: calcWidth(32), 
        color: COLORS.black, 
        fontSize: calcFont(14), 
        letterSpacing: calcFont(0.1), 
        lineHeight: calcFont(24)
    },
    itemValue:{
        fontFamily: "Roboto-Regular", 
        marginEnd: calcWidth(32), 
        color: COLORS.primary, 
        fontSize: calcFont(20), 
        letterSpacing: calcFont(0.14)
    },

});
