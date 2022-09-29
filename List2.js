//Lists2.js

import React, {useState, useEffect} from "react"
import axios  from "axios"
import {SafeAreaView,View, Text, StyleSheet,StatusBar,FlatList, Alert, Image} from "react-native"

const baseUrl="http://localhost:3000"
var axiosInstance = axios.create({
    baseURL: baseUrl 
  });
  
const renderItem=({item})=>
{
  return(
    <View style={styles.itemView}>
      <View  style={styles.item}>
      <Text style={styles.text}>{item.id}</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.text}>{item.capital}</Text>
      </View>
      <View style={styles.item}>
      <Image
        style={styles.flag}
        source={{uri: item.flag}}   />
      </View>
    </View>
  )
} 
const Lists2=()=>{
  //---------------------------------
const [countryDetails, setCountryDetails]=useState([])
/*Define a variable (count) used in the useEffect hook to 
Prevent multiple rendering*/
const [count, setCount]=useState(0) 
useEffect(()=>{

axiosInstance.get('/country').then((resp)=>
{

if (resp.status == 200)
{
    setCountryDetails(resp.data)
    console.log(resp.data)
}
else
{
    Alert.alert("Failed to fetch country")
}
}

).catch((error)=>{

    Alert.alert(`Error::${error}`)   
  
})
}, [count])

  //---------------------------------

return (
  <SafeAreaView style={{flex:1}} >
    <StatusBar backgroundColor="purple"/>
    <View style={styles.container}>
      <View >
  <FlatList  persistentScrollbar={true} style={styles.list}
        data={countryDetails} renderItem={renderItem}
        keyExtractor={item=>item.id} 
        ListEmptyComponent= {EmptyList}
        ListHeaderComponent ={HeaderComponent}
        showsVerticalScrollIndicator={true}
        />
        </View >
        </View>
    </SafeAreaView>
)
}
const EmptyList=()=>{
return ( <View >
  <Text style={styles.text1}>
  No countries have been defined yet ...
  </Text>
  </View>)
}
const HeaderComponent=()=>{
  return(
  <View style={styles.headerItemView}>
    <View style={styles.item}>
  <Text style={styles.header}>ID</Text>
    </View>
    <View style={styles.item}>
  <Text style={styles.header}>Country Name</Text>
    </View>
    <View style={styles.item}>
  <Text style={styles.header}>Capital</Text>
    </View>
    <View style={styles.item}>
  <Text style={styles.header}>Flag</Text>
    </View>
  </View>
  

  )
}

const styles= StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    height:300,
    paddingTop:5,
    paddingHorizontal:5,
    borderWidth:1,
    borderColor:"grey",
    marginRight:5,
    marginLeft:5

  },
  list:{
    overflow: 'scroll',
  },
 
  itemView:{
    flexDirection:"row",
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    },
    item:{
      flex:1
    },
  text:{
  color:"#FFFFFF",
  fontSize:20
},
headerItemView:{
  flexDirection:"row",
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
},
header:{
  color:"#FFFFFF",
  fontSize:22
},
text1:{
  color:"blue",
  fontSize:20
},
flag: {
  width: 45,
  height: 40,
  borderWidth:2,
   borderColor:'#d35647'
}
})
export default Lists2
