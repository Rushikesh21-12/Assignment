import {StyleSheet} from 'react-native';

import colors from '../../utils/theme/colors';
import {scaledSize} from '../../utils';
import typography from '../../utils/theme/typography';

export default StyleSheet.create({
  buttonContainer: {
    marginVertical: scaledSize(15),
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: scaledSize(10),
    borderColor: colors.white,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: scaledSize(15),
    fontFamily: typography.medium,
  },
});
