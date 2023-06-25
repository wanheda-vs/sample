import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function DayCard({item}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={toggleExpand}>
        <View>
          <Text>Card Title</Text>
        </View>
      </TouchableOpacity>

      {expanded && (
        <ScrollView>
          <View>
            <Text>Card Content</Text>
            {/* Add more content here */}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    color: '#ffffff',
  },
});
