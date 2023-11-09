import React from 'react';
import { View, Text } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24 }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;