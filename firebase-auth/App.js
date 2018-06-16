import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount(){
    const config = {
        apiKey: "AIzaSyBcAdxMuNgULR0X4L2OcpnvDkDumzHQvXg",
        authDomain: "one-time-password-30206.firebaseapp.com",
        databaseURL: "https://one-time-password-30206.firebaseio.com",
        projectId: "one-time-password-30206",
        storageBucket: "one-time-password-30206.appspot.com",
        messagingSenderId: "352516860518"
      };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
