// React & ReactNative
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';


const buttonStyled = props => (
  <TouchableOpacity {...props} style={ [styles.buttonStyled, props.style] }>{ props.children }</TouchableOpacity>
); 

const styles = StyleSheet.create({
  buttonStyled: {
    width: '100%',
    backgroundColor: '#187390',
    padding: 13,
    opacity: .85,
    borderRadius: 5000
  }
});

export default buttonStyled;