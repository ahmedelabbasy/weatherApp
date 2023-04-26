import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        justifyContent: "space-between", 
        alignItems: "flex-start", 
        height: calcHeight(128), 
        width: "100%", 
        backgroundColor: COLORS.primary
    },
    backIconContainer:{
        marginStart: calcWidth(20), 
        marginTop: calcHeight(17)
    },
    title:{
        fontFamily: "Roboto-Regular", 
        color: COLORS.white, 
        fontSize: calcFont(24), 
        marginStart: calcWidth(72), 
        marginBottom: calcHeight(22)
    },

});
