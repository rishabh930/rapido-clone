import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Utiliy/Color'

const index = ({text,handlePress,disablecondition}) => {
  return (
    <Pressable disabled={disablecondition} onPress={()=>handlePress()} style={{marginVertical:5,paddingVertical:5,height:50,width:'100%',backgroundColor:!disablecondition?Color?.primary:Color.buttondisablecolor,
    alignItems:'center',justifyContent:'center',borderRadius:18}}>
    <Text style={{color: !disablecondition?Color.backgroundcolor:Color.diabletextColor,fontSize:18}} >Next</Text>
  </Pressable>
  )
}

export default index

const styles = StyleSheet.create({})