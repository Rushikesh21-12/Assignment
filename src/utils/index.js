import {Dimensions, Platform} from 'react-native';
import {showMessage} from 'react-native-flash-message';

const {width, height} = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = size => Math.ceil(size * scale);

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const deviceRelativeWidth = percent => {
  return (width * percent) / 100;
};

export const deviceRelativeHeight = percent => {
  return (height * percent) / 100;
};

export const showInfoMessage = (message, duration = 2000) => {
  showMessage({
    message,
    type: 'info',
    duration,
  });
};

export const EmailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
);

export const PasswordRegExp = new RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
);
