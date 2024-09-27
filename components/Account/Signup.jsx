import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
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

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
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
            onPress={() => router.push("/(tabs)/MyTrip")}
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
