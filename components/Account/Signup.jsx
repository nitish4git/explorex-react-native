import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name) {
      ToastAndroid.show("Enter Name", ToastAndroid.LONG);
    } else if (!email) {
      ToastAndroid.show("Enter Email", ToastAndroid.LONG);
    } else if (!phone) {
      ToastAndroid.show("Enter Phone", ToastAndroid.LONG);
    } else if (!password) {
      ToastAndroid.show("Enter Password", ToastAndroid.LONG);
    }else{
      const userData = {name , email , phone:Number(phone) , password}
      try {
        const res = await axios.post("http://192.168.1.3:5000/api/register",userData)
        console.log(res.data)
        Alert.alert("Account Created")
        router.back();
      } catch (error) {
        console.log("Something went wrong", error)
      }
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
            Create your account
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
      <View style={styles.formCantainer}>
        <View style={{ marginTop: hp(5) }}>
          <View style={styles.inputField}>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="Enter Name"
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setName(value)}
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
              Email
            </Text>

            <TextInput
              placeholder="Enter Email"
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setEmail(value)}
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
              Phone
            </Text>

            <TextInput
              placeholder="Enter Phone Number"
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setPhone(value)}
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
              placeholder=" Enter Password"
              secureTextEntry
              style={{ fontSize: hp(2), fontFamily: "outfit" }}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRegister()}
            // onPress={() => router.push("/(tabs)/MyTrip")}
          >
            <Text
              style={{
                color: "aliceblue",
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: hp(2.9),
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <Pressable
            style={{ textAlign: "center", marginTop: 14 }}
            onPress={() => router.push("/auth/Signin")}
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
              Already A Member?
              <Text
                style={{
                  color: "blue",
                  fontFamily: "outfit",
                  textTransform: "uppercase",
                }}
              >
                Log in
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  image: {
    height: 450,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  formCantainer: {
    backgroundColor: "aliceblue",
    height: "100%",
    marginTop: hp(-25),
    borderRadius: 30,
  },
  inputField: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
    borderBlockColor: "black",
    borderBottomWidth: 2,
    padding: hp(0.7),
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: wp(15),
    padding: 10,
    borderRadius: 33,
    marginTop: hp(4),
  },
});
