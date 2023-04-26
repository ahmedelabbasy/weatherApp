import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flexDirection: "row", 
        height: calcHeight(56), 
        width: "100%"
    },
    iconContainer:{
        width: calcWidth(56), 
        height: calcHeight(56), 
        justifyContent: "center", 
        alignItems: "center"
    },
    cityTxtContainer:{
        width: calcWidth(248), 
        height: calcHeight(56), 
        justifyContent: "center", 
        alignItems: "flex-start"
    },
    cityTxt:{
        fontFamily: "Roboto-Bold", 
        marginStart: calcWidth(16), 
        color: COLORS.black, 
        fontSize: calcFont(14), 
        letterSpacing: calcFont(0.1), 
        lineHeight: calcFont(24)
    }

});
