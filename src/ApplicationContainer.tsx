import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export const ApplicationContainer = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
