import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CreateTripContext } from '../context/CreateTripContext'

const Review = () => {
    const {tripData , setTripData} = useContext(CreateTripContext)
    console.log(tripData)
  return (
   <View>
    <Text>{tripData?.traveler}</Text>
    <Text>{tripData?.budget}</Text>
    <Text>{tripData.startDate}</Text>
    <Text>{tripData?.endDate}</Text>
   </View>
  )
}

export default Review

const styles = StyleSheet.create({})