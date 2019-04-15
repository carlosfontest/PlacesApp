// React & ReactNative
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const defaultInput = props => (
  <TextInput
    {...props}
    style={ [styles.input, props.style] }
  />
); 

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    padding: 8,
    margin: 10
  }
});

export default defaultInput;