import { StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import React, {useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/tripSlice";
const Tripdetails = () => {
  const navigation = useNavigation();
  const [place , setPlace] = useState();
  const [country , setCountry] = useState();
  const [tripDate , setTripDate] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  });
  const handleAddTrip = ()=>{
    if(!place && !country && !tripDate){
      ToastAndroid.show('Please fill details',ToastAndroid.LONG);
      return
    }else{
      dispatch(addTrip({place , country , tripDate}));
      setPlace("");
      setCountry("");
      setTripDate("");
      router.back('/expenses/RecentTrip')
    }
  }

 
  return (
    <View style={{backgroundColor:'aliceblue' , flex:1}}>
      <View style={{ paddingTop: hp(10) , marginHorizontal:wp(7)}}>
        <View>
        <Text
          style={{  fontFamily: "outfit-bold", fontSize: hp(5) }}
        >
          Trip Details
        </Text>
        <Text
          style={{
           
            fontFamily: "outfit",
            fontSize: hp(2),
            color: "gray",
          }}
        >
          Rememner your happiness
        </Text>
        </View>
      <View style={styles.formContainer}>
        <View style={{marginBottom:hp(3)}}>
          <Text style={{color:'tomato',fontFamily:'outfit-bold',fontSize:hp(1.8)}}>Location</Text>
          <TextInput style={styles.textInput} onChangeText={(value)=>setPlace(value)} placeholder='Location'/>
        </View>
        <View style={{marginBottom:30}}>
          <Text style={{color:'tomato',fontFamily:'outfit-bold',fontSize:hp(1.8)}}>Country</Text>
          <TextInput style={styles.textInput} placeholder='Country'
          onChangeText={(value)=>setCountry(value)}
          value={country}/>
        </View>
        <View>
          <Text style={{color:'tomato',fontFamily:'outfit-bold',fontSize:hp(1.8)}}>Select Date</Text>
          <TextInput style={styles.textInput} placeholder='Select Date'
          onChangeText={(value)=>setTripDate(value)}
          
          />
        </View>
        <TouchableOpacity style={{backgroundColor:'black', padding:15 , borderRadius:33 , marginTop:40}}
        onPress={handleAddTrip}
        >
          <Text style={{fontFamily:'outfit', fontSize:15 , color:'aliceblue' , textAlign:'center'}}>Add Trip</Text>
        </TouchableOpacity>
      </View>
      </View>

    </View>
  );
};

export default Tripdetails;

const styles = StyleSheet.create({
  formContainer:{
    marginTop:30,
    // marginHorizontal:20,
    
  },
  textInput:{
    borderBlockColor: "black",
    borderBottomWidth: 2,
    padding: hp(0.3),
  },
});
