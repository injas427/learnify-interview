import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Button, LoginContainer, OTPField} from '../components/common';

export const VerifyOTP = ({route}: {route: any}) => {
  const {phoneNumber} = route.params;

  const [otp, setOtp] = useState(Array(4).fill(''));

  const handleOtpChange = (code: string, index: number) => {
    const oldOtp = [...otp];
    oldOtp[index] = code;
    setOtp(oldOtp);
  };

  return (
    <LoginContainer title="OTP Verify" canGoBack>
      <View style={styles.confirmationContainer}>
        <Text>OTP Sent to</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
      <View style={styles.fieldSectionContainer}>
        <View style={styles.otpContainer}>
          {Array.apply(null, Array(4)).map((_, index) => (
            <OTPField
              key={index}
              value={otp[index]}
              onChangeText={text => {
                handleOtpChange(text, index);
              }}
            />
          ))}
        </View>
        <Button label="Get OTP" onPress={() => {}} />
      </View>
    </LoginContainer>
  );
};

const styles = StyleSheet.create({
  fieldSectionContainer: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmationContainer: {
    alignItems: 'center',
  },
  phoneNumber: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
