import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react';
import OTPTextView from 'react-native-otp-textinput';

const index = () => {
    let otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }
  return (
    <View>
        <OTPTextView ref={e => (otpInput = e)} inputCount={6} autoFocu={true} tintColor={'black'} textInputStyle={{borderWidth:1}}/>      
    </View>
  )
}

export default index

const styles = StyleSheet.create({})