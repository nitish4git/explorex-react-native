import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const MainScreen = () => {
  const router = useRouter();
  return (
    <>
      <View>
        <Image
          style={styles.Image}
          source={require("../../assets/images/Banner.jpeg")}
        />
      </View>
      <View style={{ marginTop: -70 }}>
        <View style={styles.textContainer}>
          <Text style={styles.HeadingName}>ExploreX</Text>
          <Text
            style={{
              textAlign: "center",
              paddingHorizontal: 30,
              marginTop: 20,
              fontSize: 22,
              fontFamily:'outfit'
            }}
          >
            Your Journey, Our Expertise
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>router.push('/auth/Signin')}>
            <Text
              style={{
                padding: 15,
                color: "aliceblue",
                textAlign: "center",
                fontSize: 22,
                fontFamily:'outfit'
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 500,
  },
  textContainer: {
    backgroundColor: "aliceblue",
    height: "100%",
    borderRadius: 35,
  },
  HeadingName: {
    textAlign: "center",
    fontSize: 55,
    marginTop: 20,
    fontFamily:'outfit-bold'
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: 70,
    marginTop: 50,
    borderRadius: 30,
  },
});
