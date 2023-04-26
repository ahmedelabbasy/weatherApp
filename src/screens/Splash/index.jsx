import React, { useEffect } from 'react';
import {
  Image,
} from 'react-native';
import {IMAGES} from '../../common';
import AppTemplate from '../../components/templates/AppTemplate';

import style from './styles';

const Splash = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(`auth`)
          }, 3000);
    }, [])
  
    return (
      <AppTemplate>
          <Image
            source={IMAGES.logo}
            style={style.img}
          />
     </AppTemplate>
    )
  }
  export default Splash;
  