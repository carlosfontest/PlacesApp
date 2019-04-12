import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class FindPlace extends Component {
  loginHandler = () => {
    this.props.navigation.navigate('')
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text>FindPlace Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40,
    display: "flex"
  }
});

export default FindPlace;
