//Screens2.js

import React, {useState, useEffect} from "react"
import axios  from "axios"
import {SafeAreaView,View, Text, StyleSheet,StatusBar,FlatList, Alert, Image, TouchableOpacity,Button} from "react-native"
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const baseUrl="http://localhost:3000"
var axiosInstance = axios.create({
    baseURL: baseUrl 
  });
  
const CanceButton=()=>{
const navigation=useNavigation()
return (
<Button title="Cancel" backgroundColor="#AFDBF5" onPress={()=>navigation.goBack()}>
</Button>

)

}

const Screens=()=>
{
  const Stack= createNativeStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="African Countries" component={Lists2}
        options={{title:"African Countries",headerStyle: {
          backgroundColor: 'purple'},headerTintColor: '#fff',headerTitleStyle: {
            fontWeight: 'bold' },statusBarColor:"purple"}}     />
        <Stack.Screen name="CountryDetails" component={CountryDetails}
        options={{title:"CountryDetails",headerStyle: {
          backgroundColor: 'purple'},headerTintColor: '#fff',headerTitleStyle: {
            fontWeight: 'bold' },statusBarColor:"purple",headerBackVisible:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
const CountryDetails=({route, navigation})=>
{
  const item=route.params.item
  //change the title of the screen to the country name 
  const [title, setTitle]=useState(item.name)
  React.useLayoutEffect(() => {
    navigation.setOptions({title:title})
  }, [title]);
  //-----------
 
  return (
    <View style={styles.countryView}>
    <View>
      <Text style={styles.text1}>{item.capital}</Text>
    </View>
    <View>
      <Image style={styles.flag}
        source={{uri: item.flag}} />
    </View>

    <View style={{marginTop:10}}><CanceButton /></View>
    </View>
  )
}

const Lists2=({route, navigation})=>{
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


//
const renderItem=({item})=>
{
  return(
    <TouchableOpacity onPress={()=>navigation.navigate("CountryDetails",{item:item})}>
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
    </TouchableOpacity>
  )
} 
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
countryView:{
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems:"center"
},
header:{
  color:"#FFFFFF",
  fontSize:22
},
text1:{
  color:"blue",
  fontSize:20,
  textTransform: "capitalize"
},
flag: {
  width: 45,
  height: 40
}
})
export default Screens