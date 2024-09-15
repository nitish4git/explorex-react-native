import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect } from 'react';
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.topContainer}>
        <Feather
          name="check-circle"
          size={24}
          color="black"
          style={styles.checkLogo}
        />
        <Text
          style={{
            paddingTop: 10,
            textAlign: "center",
            fontSize: 55,
            fontFamily: "outfit-bold",
            color: "aliceblue",
            textTransform: "uppercase",
          }}
        >
          Register
        </Text>
      </View>
      <View style={styles.formCantainer}>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter Full Name"
            style={{ fontsize: 18, fontFamily: 'outfit' }} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter Email"
            style={{ fontsize: 18, fontFamily: 'outfit' }} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter Phone NUmber" secureTextEntry
            style={{ fontsize: 18, fontFamily: 'outfit' }} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder=" Enter Password"
            style={{ fontsize: 18, fontFamily: 'outfit' }} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'aliceblue', textAlign: 'center', fontFamily: 'outfit', fontSize: 25 }}>Sign Up</Text>
        </TouchableOpacity>
        <Pressable style={{ textAlign: 'center', marginTop:10 }} onPress={() => router.push('/auth/Signup')}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Already A Member?</Text>
        </Pressable>

      </View>
    </>
  );
};

export default Signup

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "royalblue",
    height: 500,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  checkLogo: {
    fontSize: 80,
    textAlign: "center",
    paddingTop: 60,
    color: "aliceblue",
  },
  formCantainer: {
    backgroundColor: 'aliceblue',
    height: 460,
    marginTop:-220,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10
  },
  inputField:{
    backgroundColor:"#dadce0",
    marginVertical:10,
    marginHorizontal:30,
    marginTop:30,
    padding:20,
    borderRadius:20,
  },
  button:{
    backgroundColor:'black',
    marginHorizontal:50,
    padding:10,
    borderRadius:33,
    marginTop:40,
  }
});