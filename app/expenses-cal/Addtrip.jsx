import { StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import React, {useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
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
    <View style={{ paddingLeft:15 , backgroundColor:'aliceblue' , flex:1}}>
      <View style={{ paddingTop: 75 }}>
        <Text
          style={{  fontFamily: "outfit-bold", fontSize: 35 }}
        >
          Trip Details
        </Text>
        <Text
          style={{
           
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
          }}
        >
          Rememner your happiness
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={{marginBottom:30}}>
          <Text style={{fontFamily:'outfit-bold', fontSize:20}}>Where on Earth ?</Text>
          <TextInput style={{borderColor:'black', borderWidth:2,borderRadius:7, padding:7}} onChangeText={(value)=>setPlace(value)}/>
        </View>
        <View style={{marginBottom:30}}>
          <Text style={{fontFamily:'outfit-bold', fontSize:20}}>Which Country ?</Text>
          <TextInput style={{borderColor:'black', borderWidth:2,borderRadius:7, padding:7}}
          onChangeText={(value)=>setCountry(value)}
          value={country}/>
        </View>
        <View>
          <Text style={{fontFamily:'outfit-bold', fontSize:20}}>Date ?</Text>
          <TextInput style={{borderColor:'black', borderWidth:2,borderRadius:7, padding:7}}
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
  );
};

export default Tripdetails;

const styles = StyleSheet.create({
  formContainer:{
    marginTop:30,
    marginHorizontal:20,
    
  }
});
