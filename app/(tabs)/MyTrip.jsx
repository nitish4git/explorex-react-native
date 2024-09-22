import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

const Mytrip = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.mainContainer} >
        <View style={styles.topContainer}>
        <Text style={{ fontSize: 40, fontFamily: "outfit-bold" }}>My Trip</Text>
        <Ionicons
          name="add-circle"
          size={24}
          color="black"
          style={{ textAlign: "center", fontSize: 40, paddingTop: 10 }}
          onPress={()=>router.push('/Search-place')}
        />
        </View>
        <View>
        <Entypo name="location-pin" size={50} color="black" style={styles.locationLogo}/>
        <Text style={{textAlign:'center', fontFamily:'outfit',fontSize:18, marginTop: 10}}>No trips planned yet!</Text>
        <Text style={{textAlign:'center', fontFamily:'outfit',fontSize:18, marginTop: 30, marginHorizontal: 30}}>Lookes like its time to plan a new travel experience! Get Started below</Text>
        <TouchableOpacity style={styles.button} 
        onPress={()=>router.push('/create-trip/Search-place')}
        >
          <Text style={{textAlign:'center',color:'aliceblue' , padding:20 , fontSize: 13 ,fontFamily:'outfit'}}>Create Trip here...</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </>
  );
};

export default Mytrip;

const styles = StyleSheet.create({
  locationLogo:{
    marginTop: 90,
    textAlign:'center'
  },
  button:{
    backgroundColor:'black',
    marginHorizontal: 60,
    borderRadius: 33,
    marginTop: 55

  },
  mainContainer:{
    flex:1,
    backgroundColor:'aliceblue'
  },
  topContainer: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
