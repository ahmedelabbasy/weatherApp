import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white
    },
    backgroundImage:{
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    },
    img:{
        width: "100%", 
        height: "50%",
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

});
