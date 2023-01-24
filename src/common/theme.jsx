import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS ={
    primary:'#D6D3DE',
    third:'#871108',
    secondary: '#F0EDF5', 
    white: '#FFFFFF',
    black:'#231f20',
    transparent:'transparent'
};

export const SIZES = {
    width,
    height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;