import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

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

});
