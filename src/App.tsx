import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigatorRoute from './router/TabRoute/TabNavigatorRoute';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <TabNavigatorRoute />
    </NavigationContainer>
  );
};

export default App;
