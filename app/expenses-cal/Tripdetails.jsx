import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const Tripdetails = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTitle:'',
      headerTransparent:true
    })
  })
  return (
    <View>
      <View style={{paddingTop:75}}>
      <Text style={{paddingLeft: 15, fontFamily:'outfit-bold',fontSize:35}}>Trip Details</Text>

      </View>
    </View>
  )
}

export default Tripdetails

const styles = StyleSheet.create({})