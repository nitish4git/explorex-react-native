import { StyleSheet, Text, View , FlatList} from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { useSelector } from 'react-redux';

const ExpenseHistory = () => {
  const historyDetails = useSelector((state)=>state.history.historyDetails)

  const navigation = useNavigation();
  const date = new Date();
  const curMonth = date.getMonth()+1;
  const curDay = date.getDay();
  const curYear = date.getFullYear();
  console.log( `${curDay}/${curMonth}/${curYear}`)
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true ,
      headerTitle:'',
      headerTransparent : true
    })
  })
  return (
    <View style={{paddingTop:hp(10) , paddingHorizontal:wp(6) , backgroundColor:'aliceblue' , flex:1}}>
      <View>
        <Text style={{fontFamily:'outfit-bold' , fontSize:hp(3)}}>All Expenses</Text>
        <Text style={{fontFamily:'outfit' , fontSize:hp(1.5), color:'gray', paddingBottom:hp(2)}}>Know where your money goes</Text>
      </View>
      <FlatList
      data={historyDetails}
      renderItem={({item})=>{
        return <View style={styles.historyCard}>
                          <View>
                            <Text style={{fontFamily:'outfit-bold', fontSize:hp(2)}}>{item.category}</Text>
                            <Text style={{fontFamily:'outfit', fontSize:hp(2), color:'gray'}}>{item.reason}</Text>
                          </View>
                          <View>
                            <Text style={{fontFamily:'outfit-bold' , fontSize:hp(2)}}>{`₹${item.inputAmount}`}</Text>
                            <Text style={{fontFamily:"outfit-medium", fontSize:hp(1.5) , color:'gray'}}>{`${curDay}/${curMonth}/${curYear}`}</Text>

                          </View>
                </View>
        }}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ExpenseHistory

const styles = StyleSheet.create({
  historyCard:{
    backgroundColor:'#f5f5f5',
    marginVertical:hp(0.7),
    paddingHorizontal:wp(2),
    borderRadius:10,
    borderColor:'black',
    borderWidth:1,
    shadowColor:'black',
    shadowOffset:1,
    elevation:5,
    paddingVertical:hp(2),
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
    
  }
})