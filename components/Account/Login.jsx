import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  return (
    <>
      <View style={styles.topContainer}>
        <ImageBackground
          source={require("../../assets/images/towncity.jpeg")}
          style={styles.image}
          imageStyle={{ borderRadius: 15}}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Enter email"
            style={{ fontSize: 12, fontFamily: "outfit" }}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={{ fontSize: 12, fontFamily: "outfit" }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "aliceblue",
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 25,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Pressable
          style={{ textAlign: "center", marginTop: 14 }}
          onPress={() => router.push("/auth/Signup")}
        >
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            {" "}
            Don't have an account?
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 450,
    borderRadius: 20,
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
    height: 460,
    marginTop: -140,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 10,
  },
  inputField: {
    backgroundColor: "#dadce0",
    marginVertical: 10,
    marginHorizontal: 30,
    marginTop: 25,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 33,
    marginTop: 40,
  },
});
