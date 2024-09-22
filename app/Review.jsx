import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CreateTripContext } from '../context/CreateTripContext';
import { TouchableOpacity } from 'react-native';

const Review = () => {
    const {tripData , setTripData} = useContext(CreateTripContext)
  return (
   <View>
    <View style={{paddingTop: 65 , paddingLeft: 15}}>
      <Text style={{fontFamily:'outfit-bold',fontSize:35}}>Review your trip</Text>
    </View>
    <View>
      
      <View style={styles.cardContainer}>
        <View>
        <Text style={{fontSize:40}}>🏰</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' , fontSize: 20}}>Destination</Text>
        <Text style={{fontFamily:'outfit',fontSize:15}}>Thailand</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
      <Text style={{fontSize:40}}>🦸</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' , fontSize: 20}}>Traveler</Text>
        <Text style={{fontFamily:'outfit',fontSize:15}}>{tripData.traveler}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
     <Text style={{fontSize:40}}>⏳</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' , fontSize: 20}}>Selected Date</Text>
        {/* <Text style={{fontFamily:'outfit',fontSize:15}}>{`${tripData.startDate} to ${tripData.endDate}`}</Text> */}
        <Text>date</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View>
        
        <Text style={{fontSize:38}}>💰</Text>
        </View>
        <View style={{paddingLeft: 20}}>

        <Text style={{fontFamily:'outfit-bold' , fontSize: 20}}>Budget</Text>
        <Text style={{fontFamily:'outfit',fontSize:15}}>{tripData.budget}</Text>
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