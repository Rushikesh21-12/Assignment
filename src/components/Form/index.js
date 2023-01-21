import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import CustomButton from '../CustomButton';
import FloatingInputText from '../FloatingTextInput';
import {EmailRegExp, PasswordRegExp, showInfoMessage} from '../../utils';

const configJSON = require('./config');

function Form(props) {
  const {formNumber} = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeName = text => {
    setName(text);

    if (!text.trim()) setNameErr(configJSON.errorNameRequired);
    else if (text.length < 5) setNameErr(configJSON.errorNameValidation);
    else setNameErr('');
  };

  const onChangeEmail = text => {
    setEmail(text);

    if (!text.trim()) setEmailErr(configJSON.errorEmailRequired);
    else if (!EmailRegExp.test(text))
      setEmailErr(configJSON.errorEmailValidation);
    else setEmailErr('');
  };

  const onChangePassword = text => {
    setPassword(text);

    if (!text.trim()) setPasswordErr(configJSON.errorPasswordRequired);
    else if (!PasswordRegExp.test(text))
      setPasswordErr(configJSON.errorPasswordValidation);
    else setPasswordErr('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameErr(configJSON.errorNameRequired);
      isValid = false;
    }

    if (!email.trim()) {
      setEmailErr(configJSON.errorEmailRequired);
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordErr(configJSON.errorPasswordRequired);
      isValid = false;
    }

    return isValid;
  };

  const onSubmitForm = () => {
    if (!validateForm()) return;

    showInfoMessage(`Employee form ${formNumber} successfully submitted.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Employee form {formNumber}</Text>

      <FloatingInputText
        label="Name"
        value={name}
        ref={nameRef}
        error={nameErr}
        onChangeText={onChangeName}
        returnKeyType="next"
        onSubmitEditing={() => {
          emailRef.current?.focus();
        }}
        blurOnSubmit={false}
        autoCapitalize="none"
      />

      <FloatingInputText
        label="Email"
        value={email}
        ref={emailRef}
        error={emailErr}
        onChangeText={onChangeEmail}
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordRef.current?.focus();
        }}
        blurOnSubmit={false}
        autoCapitalize="none"
      />

      <FloatingInputText
        label="Password"
        value={password}
        secureTextEntry
        ref={passwordRef}
        error={passwordErr}
        onChangeText={onChangePassword}
      />

      <CustomButton title="Submit" onPress={onSubmitForm} />
    </View>
  );
}

export default Form;
