import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface DotProps {
    color: string
}

const Dot: React.FC<DotProps> = ({color}) => {
  return (
  <View style={[styles.container, {backgroundColor: color}]} />
  );
};

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('screen').width * 0.050,
        height: Dimensions.get('screen').width * 0.050,
        borderRadius: Dimensions.get('screen').width * 0.050 / 2,
        marginHorizontal: '2.5%',
    }
})

export default Dot;