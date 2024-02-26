import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Utiliy/Color'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Dashbord = () => {
  return (
    <View>
      {/* header and searchScreen */}

      <View>
        <View style={{backgroundColor:Color.backgroundcolor,width:40,height:40,borderRadius:50}}>
<Ionicons name={'menu-sharp'} color={'black'}/>
        </View>
      </View>
      {/* header and searchScreen */}
      
    </View>
  )
}

export default Dashbord

const styles = StyleSheet.create({})