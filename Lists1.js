//Creating the first app

import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

 List1=()=>{
  state={
    countries:[{id:1, name:"Kenya"},
    {id:2, name:"Rwanda"}, {id:3, name:"Somali"}, {id:4, name:"Tanzania"}, {id:5, name:"Uganda"}
    ]
  }
return (
 <View>
  {
  state.countries.map((item,index ) =>  (
 <View key={item.id}>
   <Text style={styles.text}>
  {item.name}</Text>
  </View>
  ))
}
 </View>
)
}
const styles= StyleSheet.create({
text:{
color:"#FF0FFF",
fontSize:20
}
})
export default List1