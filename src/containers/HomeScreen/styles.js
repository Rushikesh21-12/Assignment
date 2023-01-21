import {StyleSheet} from 'react-native';

import colors from '../../utils/theme/colors';
import {scaledSize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topButtonView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 15,
    padding: 0,
  },
  buttonIconContainer: {
    backgroundColor: colors.black,
    height: scaledSize(40),
    width: scaledSize(40),
    borderRadius: scaledSize(20),
    justifyContent: 'center',
  },
});
