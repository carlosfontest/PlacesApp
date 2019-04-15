// React & ReactNative
import React from 'react';
import { Text, StyleSheet } from 'react-native';


const headingText = props => (
  <Text {...props} style={ [styles.headingText, props.style] }>{ props.children }</Text>
); 

const styles = StyleSheet.create({
  headingText: {
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 6
  }
});

export default headingText;