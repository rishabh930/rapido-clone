import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, LoginButton, Otpinput } from '../../Component'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../../Utiliy/Color'
const VerifyOtp = ({Numbeer}) => {
    const nav=useNavigation()

  return (
    <View style={{flex:1,backgroundColor:Color.backgroundcolor}}>
        <Header title={'Verify OTP'}/>
        <View style={{marginHorizontal:20,flexGrow:1}}>
        <View>
        <View style={{marginVertical: 10}}>
            <Text style={styles.upperText}>Enter your verification code</Text>
            <Text style={styles.upperText_2}>
              send to number {Numbeer||'7725736272'}            
            </Text>
        </View>
        <View>
            <Otpinput/>
        </View>
         </View>
       
        </View>
        <View style={{marginHorizontal:10}}>
          <Text style={{marginVertical:5}}>By continuing ,you agree to the T&C and Privacy Policy</Text>
          <LoginButton  handlePress={()=>nav.navigate('Dashbord')}/>
         
        </View>
    </View>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
    upperText: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight:28,
      color: 'black',
    },
    upperText_2: {
      fontSize: 14,
      lineHeight:28,
    },
  });