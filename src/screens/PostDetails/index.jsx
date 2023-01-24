import React from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import images from '../../common/images';
import style from './styles';

const PostDetails = ({ navigation }) => {

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
  export default PostDetails;
  