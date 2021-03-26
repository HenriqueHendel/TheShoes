import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SizeButtonProps {
  size: number
  active?: boolean
}

const SizeButton: React.FC<SizeButtonProps> = ({size, active}) => {
  return (
    <View style={[styles.container, {backgroundColor: active ? '#17181a' : '#FFF'}]}>
      <Text style={[styles.sizeNumberText, {color: active ? '#FFF' : '#c9c'}]}>{size}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10
  },
  sizeNumberText: {
    color: '#FFF',
    fontSize: 18
  }
})

export default SizeButton;