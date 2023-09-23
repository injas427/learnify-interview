import React, {useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, LoginContainer} from '../components/common';
import {PHONE_REG} from '../constants';

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const isButtonDisabled = () => !PHONE_REG.test(phoneNumber);
  return (
    <LoginContainer>
      <View style={styles.fieldSectionContainer}>
        <View style={styles.inputContainer}>
          <Text>+91 </Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
        <Button
          label="Get OTP"
          disabled={isButtonDisabled()}
          onPress={() => {}}
        />
      </View>
    </LoginContainer>
  );
};

const styles = StyleSheet.create({
  fieldSectionContainer: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#ededeb',
  },
  input: {
    flex: 1,
  },
});
