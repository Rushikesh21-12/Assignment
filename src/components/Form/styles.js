import {StyleSheet} from 'react-native';
import {scaledSize} from '../../utils';

export default StyleSheet.create({
  container: {
    borderTopWidth: 3,
    paddingHorizontal: scaledSize(15),
    paddingVertical: scaledSize(10),
  },
  formTitle: {
    fontSize: scaledSize(15),
    fontWeight: 'bold',
  },
});
