// React & ReactNative
import React from 'react';
import { Text, StyleSheet } from 'react-native';


const mainText = props => (
  <Text style={ styles.maintext }>{ props.children }</Text>
); 

const styles = StyleSheet.create({
  maintext: {
    color: '#fff',
    backgroundColor: 'transparent'
  }
});

export default mainText;