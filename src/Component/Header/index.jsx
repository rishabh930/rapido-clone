import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logoimage} from '../../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const index = ({title}) => {

  const nav=useNavigation()
  if(title){
  return(
      <View style={{marginHorizontal:10,paddingVertical:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Pressable onPress={()=>nav.canGoBack()} style={{marginRight:10}}>
         <AntDesign name={'arrowleft'} size={26} color='black' />
        </Pressable>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>{title||"Verify OTP"}</Text>
        </View>


      </View>
    )
  }else{
     return (
          <View style={{marginHorizontal:10}}>
             <Image
              source={logoimage}
                style={{width: 80, height: 80, resizeMode: 'center'}}
              />
          </View>
  );
}
};

export default index;

const styles = StyleSheet.create({});
