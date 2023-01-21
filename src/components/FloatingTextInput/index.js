import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {TextField} from 'rn-material-ui-textfield';
import {Icon} from 'react-native-elements';

import colors from '../../utils/theme/colors';
import {scaledSize} from '../../utils';
import typography from '../../utils/theme/typography';

function FloatingInputText(props, ref) {
  const {
    label,
    value,
    error,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    textColor = colors.text_black,
    fontSize = scaledSize(16),
    labelFontSize = scaledSize(14),
    tintColor = colors.text_label,
    baseColor = colors.text_label,
    errorColor = colors.red,
    labelTextStyle = styles.inputLabel,
    returnKeyType = 'done',
    secureTextEntry = false,
    maxLength,
    keyboardType,
    ...rest
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const renderRightIcon = React.useCallback(() => {
    return secureTextEntry ? (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.paddingEnd10}
        onPress={() => {
          setPasswordVisible(!passwordVisible);
        }}>
        <Icon
          color={baseColor}
          name={passwordVisible ? 'ios-eye-off' : 'ios-eye'}
          type="ionicon"
          size={scaledSize(25)}
        />
      </TouchableOpacity>
    ) : null;
  }, [secureTextEntry, passwordVisible]);

  return (
    <TextField
      label={label}
      value={value}
      error={error}
      ref={ref}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      textColor={textColor}
      fontSize={fontSize}
      labelFontSize={labelFontSize}
      tintColor={tintColor}
      baseColor={baseColor}
      errorColor={errorColor}
      labelTextStyle={labelTextStyle}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      renderRightAccessory={renderRightIcon}
      secureTextEntry={secureTextEntry && !passwordVisible}
      maxLength={maxLength}
      lineWidth={1}
      activeLineWidth={1}
      disabledLineWidth={1}
      keyboardType={keyboardType}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: typography.light,
    paddingTop: 3,
  },
  inputText: {
    fontFamily: typography.regular,
    fontSize: scaledSize(14),
  },
  paddingEnd10: {
    paddingEnd: 10,
  },
});

export default React.forwardRef(FloatingInputText);
