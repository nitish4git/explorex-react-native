import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';



const layout = () => {
  useFonts({
    "outfit-bold" : require('../assets/fonts/Outfit-Bold.ttf')
  })

  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown:false}}/>
   </Stack>
  )
}

export default layout

const styles = StyleSheet.create({})