// React & ReactNative
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Platform, Image, Text, TouchableOpacity, TextInput, Button, ScrollView, KeyboardAvoidingView } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Others
import imagePlaceholder from '../../../assets/image.jpg';


class SharePlace extends Component {
  state = {
    placeName: ''
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Share Place',
      headerRight: (
        <TouchableOpacity onPress={ () => navigation.toggleDrawer() } style={{ marginRight: 15 }}>
          <Ionicons name="ios-menu" size={38} />
        </TouchableOpacity>
      )
    }
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    })
  };

  placeAddedHandler = () => {
		if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.principalContainer }>
        <ScrollView style={ styles.formContainer }>
          <View style={ [styles.placeholder, styles.placeholder1] }>
            <Image source={ imagePlaceholder } style={ styles.imagePlaceholder }/>
          </View>
          <View style={ styles.buttonContainer }>
            <Button title='Pick Image' onPress={ () => alert('Pick Image!') }/>
          </View>

          <View style={ styles.placeholder }>
            <Text>Map Preview</Text>
          </View>
          <View style={ styles.buttonContainer }>
            <Button title='Locate Me' onPress={ () => alert('Locate Me!') }/>
          </View>
          
          <TextInput value={ this.state.placeName } placeholder='Place Name' style={ styles.input } onChangeText={ this.placeNameChangedHandler }/>
          <Button title='Share the Place!' onPress={ this.placeAddedHandler }/>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%'
  },
  principalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    width: '95%',
    height: 150,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder1: {
    marginTop: 0
  },
  buttonContainer: {
    width: '60%',
    alignSelf: 'center'
  },
  input: {
    backgroundColor: '#eee',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 8
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%'
  }
});

// Connect to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);
