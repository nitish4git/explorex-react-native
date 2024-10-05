import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const EmptyHistory = () => {
  return (
    <View style={{height: hp(100) , marginTop:hp(20)}}>
    <Text style={{fontSize:hp(7) , textAlign:'center',paddingBottom:hp(2)}}>🧘</Text>
      <Text style={{fontFamily:'outfit-bold',fontSize:hp(3), textAlign:'center'}}>Nothing here</Text>
      <Text style={{fontFamily:'outfit',fontSize:hp(1.5), textAlign:'center' , color:'gray'}}>You have not done any Expenses</Text>
    </View>
  )
}

export default EmptyHistory

const styles = StyleSheet.create({})