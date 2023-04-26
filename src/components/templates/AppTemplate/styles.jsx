import { StatusBar, StyleSheet } from 'react-native';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height:"100%"
    },
    backgroundGrad:{
        flex: 1,
    },
    backgroundImage:{
        flex: 1,
        alignItems: "flex-start", 
        justifyContent: "flex-start",
        width:"100%",
        height:"100%"
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
      },
});
