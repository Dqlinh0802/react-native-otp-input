/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{backgroundColor: '#FFF', marginLeft: 'auto', marginRight: 'auto'}}>
        <Text style={{fontSize: 20}}>Vui lòng nhập mã OTP.</Text>
          <Text style={{fontSize: 18, marginBottom: 15}}>
            <Text style={{fontWeight: 'bold'}}>
              0123456789
            </Text>
          </Text>
        <OTPInputView
            style={{width: '80%', height: 40, alignSelf: 'center'}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={{
              color: 'black',
              fontSize: 17,
              fontWeight: 'bold',
            }}
            onCodeFilled={code => {
              this.setState({code});
            }}
          />
      </KeyboardAvoidingView>
    );
  }
}

