import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const ComponentA = props => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textStyle}>A-Count</Text>
        <Text style={styles.textStyle}>{props.count}</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.incrementB}>
          <Text style={styles.textStyle}>B-Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle} onPress={props.incrementParent}>
            Parent-Increment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ComponentA;
