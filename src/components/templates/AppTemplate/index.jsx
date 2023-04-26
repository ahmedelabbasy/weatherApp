import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StatusBar,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import { COLORS, IMAGES } from '../../../common';
import style from './styles';

function AppTemplate(props) {

  return (
    <View
      style={style.container}
    >
      <View style={[style.statusBar, { backgroundColor: COLORS.primaryDark }]}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor={COLORS.primaryDark} barStyle="light-content" />
        </SafeAreaView>
      </View>
      <LinearGradient colors={[COLORS.white, COLORS.white, COLORS.gray]} style={style.backgroundGrad}>
        <ImageBackground
          source={IMAGES.bg}
          resizeMode={"cover"}
          style={style.backgroundImage}
        >
          {props.children}
        </ImageBackground>
      </LinearGradient>

    </View>
  )
}
export default AppTemplate;
