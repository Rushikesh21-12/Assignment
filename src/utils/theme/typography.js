import {Platform} from 'react-native';

export default {
  regular: Platform.select({
    ios: 'Poppins-Regular',
    android: 'Poppins-Regular',
  }),

  semiBold: Platform.select({
    ios: 'Poppins-SemiBold',
    android: 'Poppins-SemiBold',
  }),

  medium: Platform.select({
    ios: 'Poppins-Medium',
    android: 'Poppins-Medium',
  }),

  light: Platform.select({
    ios: 'Poppins-Light',
    android: 'Poppins-Light',
  }),
};
