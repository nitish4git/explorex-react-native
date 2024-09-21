import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Stack } from 'expo-router/stack';
import { useFonts } from 'expo-font';
import {CreateTripContext} from '../context/CreateTripContext'



const layout = () => {
  useFonts({
    "outfit-bold" : require('../assets/fonts/Outfit-Bold.ttf'),
    "outfit" : require('../assets/fonts/Outfit-Regular.ttf'),
    "outfit-medium" : require('../assets/fonts/Outfit-Bold.ttf'),
  })
const [tripData , setTripData] = useState([])
  return (
    <CreateTripContext.Provider value={{tripData , setTripData}}>
   <Stack screenOptions={{headerShown:false}}>
    {/* <Stack.Screen name='index' options={{headerShown:false}}/> */}
    <Stack.Screen name='(tabs)' options={{headerShown:false}}/>

   </Stack>
   </CreateTripContext.Provider>
  )
}

export default layout

const styles = StyleSheet.create({})