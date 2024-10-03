import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const About = () => {
  return (
    <View style={{paddingTop:50}}>
      <Image source={require('../../assets/gif/loading.gif')}/>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})