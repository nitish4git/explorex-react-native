import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { CreateTripContext } from '../context/CreateTripContext';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const Review = () => {
    const {tripData , setTripData} = useContext(CreateTripContext)
    const initialDate = tripData?.startDate;
    const lastDate = tripData?.endDate;
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent: true,
        headerTitle:' '
      })
    })
    // console.log(initialDate.slice(0,3)+' '+initialDate.slice(10 , initialDate.length))
    // console.log(lastDate.slice(0,3)+' '+lastDate.slice(10 , lastDate.lenght))


  return (
   <View style={{backgroundColor:'aliceblue' , flex:1}}>
    <View style={{paddingTop:75 , paddingLeft: 40}}>
      <Text style={{fontFamily:'outfit-bold',fontSize:35}}>Review your trip</Text>
    </View>
    <View>
      
      <View style={styles.cardContainer}>
        <View>
        <Text style={{fontSize:40}}>🏰</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' ,color:'gray', fontSize: 17}}>Destination</Text>
        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>Thailand</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
      <Text style={{fontSize:40}}>🦸</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' ,color:'gray', fontSize: 17}}>Traveler</Text>
        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>{tripData.traveler}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
     <Text style={{fontSize:40}}>⏳</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' ,color:'gray', fontSize: 17}}>Selected Date</Text>
        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>{`${initialDate.slice(0,3)+' '+initialDate.slice(10 , initialDate.length)} to ${lastDate.slice(0,3)+' '+lastDate.slice(10 , lastDate.lenght)}`}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
        
        <Text style={{fontSize:38}}>💰</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' ,color:'gray', fontSize: 17}}>Budget</Text>
        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>{tripData.budget}</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity style={{backgroundColor:'black', marginHorizontal:50 , borderRadius:15 , marginTop: 80}}>
      <Text style={{fontFamily:'outfit', fontSize: 16 , padding:18 , color:'aliceblue',textAlign:'center'}}>Build my trip</Text>
    </TouchableOpacity>
   </View>
  )
}

export default Review

const styles = StyleSheet.create({
  cardContainer:{
    marginHorizontal: 15,
    padding:20,
    borderRadius: 12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }
})