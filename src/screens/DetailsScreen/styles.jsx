import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        width: calcWidth(296),
        height: calcHeight(401),
        backgroundColor: COLORS.white,
        borderRadius: calcHeight(4),
        shadowColor: COLORS.gray,
        shadowOffset: {
          width: calcWidth(10),
          height: calcHeight(10)
        },
        shadowOpacity: 0.5,
        shadowRadius: calcHeight(25),
        alignSelf: "center",
        marginTop: calcHeight(-45),
        justifyContent: "flex-start",
        alignItems: "center",
    },
    city: {
        fontFamily: "Roboto-Regular", 
        marginTop: calcWidth(26), 
        color: COLORS.black, 
        fontSize: calcFont(24)
     },
     iconContainer:{
        marginTop: calcHeight(68)
     },
     listContainer:{
        marginTop: calcHeight(68), 
        width: "100%"
     },
     descContainer:{
        position:"absolute",
        bottom:calcHeight(20),
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        width:calcWidth(344)
     },
     descTxt:{
        fontFamily:"Roboto-Regular",
        fontSize:calcFont(12),
        color:COLORS.secondary,
        letterSpacing:calcFont(0.4)
     }

});
