import { View, Text, FlatList,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

export default function Category() {
  
    const[categories,setCategories] = useState([]);
    useEffect(()=>{
        getCategories();
      },[])
    
      const getCategories = () =>{
        GlobalApi.getCategories().then(resp=>{
          console.log("resp",resp.categories)
          setCategories(resp.categories);
        })
      }

  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList 
        data={categories}
        numColumns={4}
        renderItem={({item,index})=>(
          <View style={styles.container}>

          <View style={styles.iconContainer}>
          
          <Image source={{uri:item?.icon?.url}}
            style={{width:30, height:30}}
          />
          </View>
          <Text style={{fontFamily:'outfit-medium', marginTop:5,}}>{item.name}</Text>
          </View>
        )}
      />
        
      
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  iconContainer:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:Colors.LIGHT_GRAY,
    padding:17,
    borderRadius:99,

  }

})
