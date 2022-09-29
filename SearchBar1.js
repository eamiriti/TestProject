import React, {useState}from "react"
import {SafeAreaView, View, TouchableOpacity,Text, StyleSheet,FlatList,StatusBar} from "react-native"
import {SearchBar} from "react-native-elements"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Data=[{id:1, name:"Kenya", capital:"Nairobi"}, 
{id:2, name:"Uganda", capital:"Kampala"},
{id:3, name:"Somali", capital:"Mogadishu"}]

const Item=({title})=>
{
    return( <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>)
}
const renderItem=({item})=>{
    return (<Item title={item.name}/>)
}
const filterData=(query)=>{
    setQuery(query)
    tempData=Data.filter((item)=>{
    const text=query.toUpperCase();
    const itemTitle=item.name.toUpperCase();
    return itemTitle.indexOf(text)>-1    
    })  
    setUpdatedData(tempData)
}
const SearchBar1=()=>{
[query, setQuery]=useState("");
[updatedData, setUpdatedData]=useState(Data);
return (
    <SafeAreaView>
        <View>
            <SearchBar
            placeholder="Search Country..."
            lightTheme
            round={true}
            searchIcon={{ size: 24 }}
            onChangeText={(text) => filterData(text)}
            onClear={(text) => filterData('')}
            value={query}
            inputContainerStyle={{backgroundColor: 'white'}}
            inputStyle={{backgroundColor: 'white', color:"#808080", fontWeight:"bold"}}
            containerStyle={{/*backgroundColor: 'grey',*/ borderWidth: 1, borderRadius: 5}}
            placeholderTextColor={'#808080'}
            icon={()=><MaterialIcons name="Search" size={50}/>}
            />
        </View>
        <FlatList
        data={updatedData} renderItem={renderItem}
        keyExtractor={item=>item.id}
        />
    </SafeAreaView>
)


}
export default SearchBar1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#ccff99',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
  });
  
