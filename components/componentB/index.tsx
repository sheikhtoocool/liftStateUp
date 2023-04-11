import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const ComponentB = props => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textStyle}>B-Count</Text>
        <Text style={styles.textStyle}>{props.count}</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.incrementA}>
          <Text style={styles.textStyle}>A-Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.incrementParent}>
          <Text style={styles.textStyle}>Parent-Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ComponentB;
