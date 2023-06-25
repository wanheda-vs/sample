import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Page/HomeScreen';
import CalendarScreen from '../Page/CalendarScreen';

const Tab = createBottomTabNavigator();

export function BottomNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}
