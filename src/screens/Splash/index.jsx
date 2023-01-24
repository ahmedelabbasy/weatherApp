import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  View,
} from 'react-native';
import images from '../../common/images';
import style from './styles';

const Splash = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(`auth`, { screen: "home" })
          }, 3000);
    }, [])
  
    return (
      <View
        style={style.container}
      >
        <ImageBackground
          source={images.bg}
          resizeMode={"cover"}
          style={style.backgroundImage}
        >
          <Image
            source={images.logo}
            style={style.img}
          />
        </ImageBackground>
      </View>
    )
  }
  export default Splash;
  