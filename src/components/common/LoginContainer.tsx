import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Container} from './Container';
import Bg from '../../assets/images/bg.svg';

export const LoginContainer = ({
  title,
  children,
  canGoBack,
}: {
  title: string;
  children: React.ReactNode;
  canGoBack?: boolean;
}) => {
  return (
    <Container title={title} canGoBack={canGoBack}>
      <>
        <View style={styles.bgContainer}>
          <Bg width={170} height={170} />
        </View>
        <View>{children}</View>
        <View style={styles.termsContainer}>
          <Text style={styles.terms}>
            By signing up, you agree with our terms and conditions
          </Text>
        </View>
      </>
    </Container>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  termsContainer: {
    margin: 20,
    alignItems: 'center',
    textAlign: 'justify',
  },
  terms: {
    color: '#a8a8a7',
  },
});
