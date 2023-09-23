import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View} from 'react-native';
import {Container} from './Container';
import Bg from '../../assets/images/bg.svg';

export const LoginContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <Container title="Log in">
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

LoginContainer.propTypes = {
  children: PropTypes.element,
};
