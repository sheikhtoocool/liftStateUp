import React, {useState} from 'react';
import ComponentB from '../../components/componentB';
import ComponentA from '../../components/componentA';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './styles';
const ParentScreen = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [counterParent, setCounterParent] = useState(0);
  const onBIncrement = () => {
    setCounterB(counterB + 1);
  };
  const onAIncrement = () => {
    setCounterA(counterA + 1);
  };
  const onPIncrement = () => {
    setCounterParent(counterParent + 1);
  };
  return (
    <View>
      <View style={style.rowContainer}>
        <Text style={style.textStyle}>Parent-Count</Text>
        <Text style={style.textStyle}>{counterParent}</Text>
      </View>
      <ComponentA
        count={counterA}
        incrementB={onBIncrement}
        incrementParent={onPIncrement}
      />
      <ComponentB
        count={counterB}
        incrementA={onAIncrement}
        incrementParent={onPIncrement}
      />
      <View style={style.rowContainer}>
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={() => {
            setCounterA(counterA + 1);
          }}>
          <Text style={style.textStyle}>A-Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={() => {
            setCounterB(counterB + 1);
          }}>
          <Text style={style.textStyle}>B-Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ParentScreen;
