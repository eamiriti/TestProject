import React, {useState, useEffect}from "react"
import axios  from "axios";
import {SafeAreaView, View,Text, StyleSheet,StatusBar, Alert} from "react-native"


//const baseUrl="http://10.0.2.2:3000"

const baseUrl = 'http://localhost:3000';
var axiosInstance = axios.create({
  baseURL: baseUrl,
});

const Country=()=>{
  const [countryDetails, setCountryDetails] = useState([]);
const [countryId, setCountryId]=useState('')
const [fetchingData, setFetchingData]=useState("")
useEffect(()=>{

setFetchingData(true)
axiosInstance.get('/country/1').then((resp)=>
{

if (resp.status == 200)
{
    setCountryDetails(resp.data)
    setCountryId(countryDetails.id)
    console.log(resp.data)
}
else
{
    Alert.alert("Failed to fetch country")
}
setFetchingData(false)
}

).catch((error)=>{

    Alert.alert(`Error::${error}`)   
   setFetchingData(false) 
  
})
}, [countryId])
return (
    <View style={styles.container}>
    <Text style={styles.title}>Country Details</Text>
    <Text style={styles.text}>Name: {countryDetails.name}</Text>
    <Text style={styles.text}>Capital: {countryDetails.capital}</Text>
    <Text style={styles.text}>Id: {countryId}</Text>
    </View>
)
}

const Get1=()=>{
return (
    <SafeAreaView>
        <View>
        <Country />
        
        </View>
    </SafeAreaView>
)


}
export default Get1

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0
    },
    text: {
      backgroundColor: '#808080',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 5,
      fontSize: 20,
      color:"#FFFFFF"
    },
    title: {
      backgroundColor: '#808080',
      fontSize: 20,
      color:"#FFFFFF",
      textAlign:"center"
    }
  });
  
