//Screens1.js

import React from "react"
import {View, Text, StyleSheet,SafeAreaView, Button} from "react-native"

const ScreenOne=({route, navigation})=>{
  return (
    <SafeAreaView>

    <View style={styles.container}>
      <Text style={styles.text1}>
        Screen one.  Use color {route.params.colors} 
      </Text>
      <Button title="Go to Screen 2" color="#2196F3" onPress={()=>navigation.navigate("ScreenTwo",{colors:"blue"})}/>
    </View>
    </SafeAreaView>

  );
}
const ScreenTwo=({route, navigation})=>{
  return (
    <SafeAreaView>

    <View style={styles.container}>
      <Text style={styles.text2}>
        Screen Two. Use color {route.params.colors}
      </Text>
      <Button title="Go to Screen 1" color="#2196F3"
       onPress={()=>navigation.navigate("ScreenOne",{colors:"red",size:"20"})}/>
    </View>
    </SafeAreaView>

  );
}

styles= StyleSheet.create({ 
text1:{
color:"#FF0000",
fontSize:20
},
text2:{
  color:"#2196F3",
  fontSize:20
  }
})
export {ScreenOne, ScreenTwo}