//TouchableOpacity 

import React from "react"
import {View, Text, StyleSheet, TouchableOpacity,Alert} from "react-native"

 TouchableOpacity1=()=>{
 showAlert=(msg)=>{
    Alert.alert(msg)
  }
return (
<View style={styles.container}>
  <TouchableOpacity style={styles.view} onPress={()=>showAlert("Opacity A")}  >
  <Text style={styles.text}>
    Opacity A
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.view} onPress={()=>showAlert("Opacity B")} >
    <Text style={styles.text}>
    Opacity B
    </Text>
  </TouchableOpacity>
 </View>
)
}
const styles= StyleSheet.create({
view:{
margin:5,
width:100,
backgroundColor:"#2196F3"
},
container:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:"center"
},
text:{
  color:"#FFFF00",
  fontSize:20,
  fontWeight:"bold",
  textAlign:"center"
}

})
export default TouchableOpacity1