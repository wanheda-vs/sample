/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigator} from './src/components/BottomNavigator';
import dayjs from 'dayjs';
let customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

export default App;
