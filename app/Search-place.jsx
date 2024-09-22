import { StyleSheet, View, TextInput, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import {CreateTripContext} from '../context/CreateTripContext'

const SearchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const {tripData , setTripData} = useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Search Place",
      // headerStyle: { backgroundColor: "black"}, // changing background color of the head
      headerTransparent: true ,
      headerTitleStyle: { color: "black", fontFamily: "outfit-bold" }, // for Text written in header
      headerTintColor: "black", //for arrown
    });
  }, [navigation]);
  return (
    <View style={{ backgroundColor: "aliceblue", flex: 1 , paddingTop: 90 }}>
      {/* //Google search API goes here.... */}
      <TextInput
        style={styles.searchField}
        placeholder="Search-Places"
        onChangeText={(value) => setPlace(value)}
      />
      <TouchableOpacity style={{backgroundColor:'black'  ,  marginHorizontal:120, borderRadius: 33 , }}
      onPress={()=>router.push('/SelectPartner')}>
        <Text style={{textAlign:'center' , color: 'aliceblue' , fontFamily:'outfit' , fontSize: 16 , padding: 13}}>Next</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default SearchPlace;

const styles = StyleSheet.create({
  searchField: {
    padding: 11,
    borderBlockColor: "black",
    borderWidth: 2,
    margin: 20,
    borderRadius: 9,
    fontFamily: "outfit",
    fontSize: 15,
    paddingLeft: 19,
    backgroundColor:'white'
  },
});
