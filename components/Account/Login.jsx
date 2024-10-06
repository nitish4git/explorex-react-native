import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import Toastmessage from "../Toast/Toastmessage";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email) {
      ToastAndroid.show("Enter Email", ToastAndroid.LONG);
    } else if (!password) {
      ToastAndroid.show("Enter Password", ToastAndroid.LONG);
    } else {
      const userData = { email, password };
      await axios
        .post("http://192.168.1.3:5000/api/login", userData)
        .then((res) =>{
          // console.log(res.data)
          if(res.data.status === "ok"){
            Alert.alert("Login successfull");
            AsyncStorage.setItem("token",res.data.data);
            AsyncStorage.setItem("isLoggedIn" , JSON.stringify(true))
            router.navigate('(tabs)/MyTrip')
            setEmail("");
            setPassword("");
            
          }else if(res.data.oldUser == null){
            Alert.alert("Invalid email or password")
          }
        } )
        .catch((e) => console.log("something wents wrong", e));
    }
  };

  return (
    <>
      <View style={styles.topContainer}>
        <LinearGradient colors={["#ff0000", "#2b1637"]} style={styles.image}>
          <Text
            style={{
              color: "aliceblue",
              fontFamily: "outfit-bold",
              fontSize: hp(5),
              marginTop: hp(7),
              marginLeft: wp(7),
            }}
          >
            Log In
          </Text>
          <Text
            style={{
              color: "aliceblue",
              fontFamily: "outfit",
              fontSize: hp(2),
              marginLeft: wp(7),
            }}
          >
            Let's drive into the adventure
          </Text>
        </LinearGradient>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.loginContainer}>
          <View style={styles.inputField}>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Enter email"
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
          </View>
          <View style={styles.inputField}>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Enter password"
              secureTextEntry
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text
              style={{
                color: "aliceblue",
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: hp(2.9),
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Pressable
            style={{ textAlign: "center", marginTop: 14 }}
            onPress={() => router.push("/auth/Signup")}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: hp(1.5),
                fontFamily: "outfit",
                fontSize: hp(1.8),
              }}
            >
              {" "}
              Don't have an account?{" "}
              <Text
                style={{
                  color: "blue",
                  fontFamily: "outfit",
                  textTransform: "uppercase",
                }}
              >
                Sign in
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>

    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: hp(10),
  },
  image: {
    height: 450,
    borderBottomLeftRadius: 30,
  },

  checkLogo: {
    fontSize: 100,
    textAlign: "center",
    paddingTop: 80,
    color: "aliceblue",
  },
  formContainer: {
    backgroundColor: "aliceblue",
    height: "100%",
    marginTop: hp(-25),
    borderRadius: 30,
  },
  inputField: {
    marginVertical: hp(1.5),
    marginHorizontal: wp(5),
    borderBlockColor: "black",
    borderBottomWidth: 2,
    padding: hp(0.7),
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: wp(15),
    padding: hp(1.5),
    borderRadius: 33,
    marginTop: hp(4),
  },
});
