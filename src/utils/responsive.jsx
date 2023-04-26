import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Platform } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const calcWidth = (pixels) => {
  const deviceRatio = (pixels * 100) / 360;
  return wp(deviceRatio);
};

const calcHeight = (pixels) => {
  const deviceRatio = (pixels * 100) / 720;
  return hp(deviceRatio);
};

const calcFontWeight = (weight) => {
  return Platform.OS === 'ios' ? `${weight}` : null;
};
const SIZES = {
  width,
  height,
};

export { calcWidth, calcHeight, calcHeight as calcFont, calcFontWeight,SIZES };
