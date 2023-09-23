import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export const Button = ({
  disabled,
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#D3523E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 20,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
