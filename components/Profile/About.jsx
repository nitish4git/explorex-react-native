import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toastmessage from '../Toast/Toastmessage'

const About = () => {
  return (
    <View>
      <Toastmessage type={"SUCCESS"} message={"Incorrect password"} info={"please check email and password"}/>
      <TouchableOpacity><Text>click me</Text></TouchableOpacity>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})