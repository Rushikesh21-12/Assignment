import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Button} from 'react-native-elements';

import styles from './styles';

export default function CustomButton(props) {
  const {title, onPress} = props;

  return (
    <Button
      TouchableComponent={TouchableOpacity}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      title={title}
      onPress={onPress}
    />
  );
}
