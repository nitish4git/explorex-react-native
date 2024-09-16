import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router/stack';
import { useFonts } from 'expo-font';



const layout = () => {
  useFonts({
    "outfit-bold" : require('../assets/fonts/Outfit-Bold.ttf'),
    "outfit" : require('../assets/fonts/Outfit-Regular.ttf'),
    "outfit-medium" : require('../assets/fonts/Outfit-Bold.ttf'),
  })

  return (
   <Stack screenOptions={{headerShown:false}}>
    {/* <Stack.Screen name='index' options={{headerShown:false}}/> */}
    <Stack.Screen name='(tabs)' options={{headerShown:false}}/>

   </Stack>
  )
}

export default layout

const styles = StyleSheet.create({})