// React & ReactNative
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux';
import { addUser, removeUser } from '../../store/actions/index';


class Auth extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  loginHandler = () => {
    // Loggeamos por ahora a un user cualquiera
    this.props.onAddUser('Carlos');
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text>Auth Screen</Text>
        <Button title='Login' onPress={ this.loginHandler }/>
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
