import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  View,
} from 'react-native';
import images from '../../common/images';
import style from './styles';

const Home = ({ navigation }) => {

    return (
      <View
        style={style.container}
      >
        <ImageBackground
          source={images.bg}
          resizeMode={"cover"}
          style={style.backgroundImage}
        >
        </ImageBackground>
      </View>
    )
  }
  export default Home;
  