import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, VerifyOTP} from './screens';

export const ApplicationContainer = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="verify_otp" component={VerifyOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
