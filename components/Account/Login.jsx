import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
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
            />
          </View>
          <TouchableOpacity style={styles.button}>
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
