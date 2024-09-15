import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";


const Login = () => {
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
            paddingTop: 30,
            textAlign: "center",
            fontSize: 55,
            fontFamily: "outfit-bold",
            color: "aliceblue",
            textTransform: "uppercase",
          }}
        >
          Welcome
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter email" style={{ fontSize: 18, fontFamily: 'outfit' }} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Enter password" secureTextEntry style={{ fontSize: 18, fontFamily: 'outfit' }} />
        </View>
        <TouchableOpacity style={styles.button}

        >
          <Text style={{ color: 'aliceblue', textAlign: "center", fontFamily: 'outfit', fontSize: 25 }}>Login</Text>
        </TouchableOpacity>
        <Pressable style={{ textAlign: 'center', marginTop: 14 }} onPress={() => router.push('/auth/Signup')}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}> Don't have an account?</Text>
        </Pressable>
      </View>

    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "royalblue",
    height: 500,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  checkLogo: {
    fontSize: 150,
    textAlign: "center",
    paddingTop: 80,
    color: "aliceblue",
  },
  formContainer: {
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
    backgroundColor: '#dadce0',
    marginVertical: 10,
    marginHorizontal: 30,
    marginTop: 50,
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 33,
    marginTop: 40
  }

});
