// React & ReactNative
import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { addUser } from '../../store/actions/index';

// Components
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonStyled from '../../components/UI/ButtonStyled';

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Others
import backImage from '../../../assets/fondo.jpg';
import logo from '../../../assets/logo.png';


class Auth extends Component {
  // static navigationOptions = {
  //   title: 'Login'
  // };

  loginHandler = () => {
    // Loggeamos por ahora a un user cualquiera
    this.props.onAddUser('Carlos');
  };

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground source={ backImage } style={ styles.backgroundImage }>

          <View style={ styles.formContainer }>
            <Image source={ logo } style={ styles.logo }/>
            <View style={ styles.inputContainer }>
              <DefaultInput placeholder='Your Email Address' style={ styles.input } placeholderTextColor='#fff'/>
              <DefaultInput placeholder='Password' style={ styles.input } placeholderTextColor='#fff'/>
              <DefaultInput placeholder='Confirm Password' style={ styles.input } placeholderTextColor='#fff'/>
            </View>
            <ButtonStyled title='Submit' onPress={ this.loginHandler } style={ styles.buttonSubmit }>
              <Text style={ styles.buttonSubmitText }>Submit</Text>
            </ButtonStyled>
          </View>

          <TouchableOpacity style={ styles.changeIcon }>
            <FontAwesome name="exchange" size={30} color='#eee' />
          </TouchableOpacity>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center'
  },
  input: {
    color: '#fff',
    backgroundColor: 'rgba(215, 215, 215, .25)'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  logo: {
    marginBottom: 20,
    width: '39%',
    height: '30%'
  },
  changeIcon: {
    alignSelf: 'flex-start',
    padding: 20,
    height: '10%'
  },
  formContainer: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSubmit: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28
  },
  buttonSubmitText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto'
  }
});


const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (name) => dispatch(addUser(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
