//Buttons 

import React from "react"
import {View, Text, StyleSheet, Button,Alert} from "react-native"

 Buttons1=()=>{
 showAlert=(msg)=>{
    Alert.alert(msg)
  }
return (
<View style={styles.container}>
  <View  style={styles.view}>
  <Button onPress={()=>showAlert("Button 1")} title=" button1 " color="#2196F3"/>
  </View>
  <View style={styles.view}>
  <Button onPress={()=>showAlert("Button 2")} title=" button2 " color="#2196F3" />
  </View>
 </View>
)
}
const styles= StyleSheet.create({
view:{
margin:5,
width:100
},
container:{
  flexDirection: 'row',
  justifyContent: 'center',
}
})
export default Buttons1