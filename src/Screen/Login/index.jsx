import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {Header, LoginButton} from '../../Component';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../Utiliy/Color';

const Login = () => {
  const nav=useNavigation()
  const [LoginNumber,setLoginNumber]=useState('')
  return (
    <View style={{backgroundColor:Color.backgroundcolor,flex:1}}>
      <Header />
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        <View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.upperText}>What's your number</Text>
            <Text style={styles.upperText_2}>
              Enter your number and proceed
            </Text>
          </View>
          <View>
            <View
              style={{
                borderBlockColor: 'grey',
                borderWidth: 1,
                // width: '70,width:'100%',backgroundColor:'blue'%',
                paddingVertical: 5,
                paddingHorizontal: 8,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 8,
                marginTop: 4,
              }}>
              <View style={{width:20}}></View>
              <Text style={{color: 'black',marginRight:10,fontSize:16}}>+91</Text>
              <TextInput  maxLength={10} style={{padding: 0,fontSize:16}} placeholder="0000000000" value={LoginNumber} onChangeText={(value)=>setLoginNumber(value)} />
            </View>
          </View>
        </View>
        <View style={{marginHorizontal:10}}>
          <Text style={{marginVertical:5}}>By continuing ,you agree to the T&C and Privacy Policy</Text>
          <LoginButton text={"Next"} handlePress={()=>nav.navigate('VerifyOtp',{data:{number:'7732914129'}})} disablecondition={(LoginNumber?.length<10)}/>
                </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  upperText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2.5,
    color: 'black',
  },
  upperText_2: {
    fontSize: 14,
  },
});
