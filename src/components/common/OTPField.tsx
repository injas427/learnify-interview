import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const OTPField = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (e: string) => void;
}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.input}
        maxLength={1}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#ededeb',
  },
  input: {width: '100%', textAlign: 'center'},
});
