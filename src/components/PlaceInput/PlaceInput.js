import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class placeInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ''
    })
  };

  render() {
    return (
      <View style={ styles.inputContainer }>
        <TextInput
          placeholder="An awesome place"
          style={ styles.placeInput }
          value={ this.state.placeName } 
          onChangeText={ this.placeNameChangedHandler }
          // underlineColorAndroid="#000"
        />
        <Button 
          title="Add" 
          style={ styles.placeButton } 
          onPress={ this.placeSubmitHandler }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    paddingBottom: 2,
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  placeButton: {
    width: "30%"
  }
})

export default placeInput;