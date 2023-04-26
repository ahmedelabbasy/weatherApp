import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    listContainer: {
        width: "100%", 
        marginTop: calcHeight(10)
    },
    fabStyle: {
        //Here is the trick
        position: 'absolute',
        width: calcWidth(137),
        height: calcHeight(56),
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        right: calcWidth(16),
        bottom: calcHeight(16),
        backgroundColor:COLORS.primary,
        borderRadius:calcWidth(28),
     },
     plusIcon:{
        marginEnd: calcWidth(16),
     },
     addText:{
        fontFamily: "Roboto-Bold", 
        color: COLORS.white, 
        fontSize: calcFont(14), 
        letterSpacing: calcFont(1.35), 
        lineHeight: calcFont(24)
     },

});
