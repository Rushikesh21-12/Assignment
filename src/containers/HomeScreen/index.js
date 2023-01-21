import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import {Icon} from 'react-native-elements';

import styles from './styles';
import Form from '../../components/Form';
import colors from '../../utils/theme/colors';
import {scaledSize} from '../../utils';

const IconButton = ({iconName, onPress}) => {
  return (
    <Icon
      color={colors.white}
      name={iconName}
      type="ionicon"
      size={scaledSize(25)}
      containerStyle={styles.buttonIconContainer}
      onPress={onPress}
    />
  );
};

const HomeScreen = () => {
  const [totalFormCount, setTotalFormCount] = useState(0);
  const [forms, setForms] = useState([]);

  const onPressMinus = () => {
    if (totalFormCount > 0) {
      forms.pop();
      setTotalFormCount(totalFormCount - 1);
    }
  };

  const onPressPlus = () => {
    const formNumber = totalFormCount + 1;
    setForms([...forms, `${formNumber}`]);
    setTotalFormCount(formNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonView}>
        <IconButton iconName="remove" onPress={onPressMinus} />
        <IconButton iconName="add" onPress={onPressPlus} />
      </View>

      <FlatList
        data={forms}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Form formNumber={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
