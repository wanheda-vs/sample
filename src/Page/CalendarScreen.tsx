import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Calendar Screen</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
export default CalendarScreen;
