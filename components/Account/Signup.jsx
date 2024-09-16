import { ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone]=useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.topContainer}>
        <ImageBackground
          source={require("../../assets/images/towncity2.jpg")}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
        />
      </View>

      <View style={styles.formCantainer}>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter Name"
            style={{ fontsize: 12, fontFamily: 'outfit' }}
            onChangeText={(value)=>setName(value)}/>
        </View>

        <View style={styles.inputField}>
          <TextInput placeholder="Enter Email"
            style={{ fontsize: 12, fontFamily: 'outfit' }}
            onChangeText={(value)=>setEmail(value)} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter Phone Number" 
            style={{ fontsize: 12, fontFamily: 'outfit' }}
            onChangeText={(value)=>setPhone(value)} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder=" Enter Password"
          secureTextEntry
            style={{ fontsize: 12, fontFamily: 'outfit'}}
            onChangeText={(value)=>setPassword(value) } />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'aliceblue', textAlign: 'center', fontFamily: 'outfit', fontSize: 25 }}>Sign Up</Text>
        </TouchableOpacity>

        <Pressable style={{ textAlign: 'center', marginTop: 14 }} onPress={() => router.push('/auth/Signin')}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>{" "}Already A Member?</Text>
        </Pressable>

      </View>
    </>
  );
};

export default Signup

const styles = StyleSheet.create({
  image: {
    height: 450,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  formCantainer: {
    backgroundColor: 'aliceblue',
    height: 460,
    marginTop: -140,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10
  },
  inputField: {
    backgroundColor: "#dadce0",
    marginVertical: 10,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 33,
    marginTop: 20,
  }
});