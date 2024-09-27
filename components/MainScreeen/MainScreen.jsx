import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
      <View style={{ marginTop: hp(-8) }}>
        <View style={styles.textContainer}>
          <Text style={styles.HeadingName}>ExploreX</Text>
          <Text
            style={{
              textAlign: "center",
              paddingHorizontal: wp(15),
              marginTop: hp(3),
              fontSize: hp(2.5),
              fontFamily:'outfit'
            }}
          >
            Your Journey, Our Expertise
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>router.push('/auth/Signin')}>
            <Text
              style={{
                padding: hp(2),
                color: "aliceblue",
                textAlign: "center",
                fontSize: hp(2.5),
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
    height: hp(60),
  },
  textContainer: {
    backgroundColor: "aliceblue",
    height: "100%",
    borderRadius: 35,
  },
  HeadingName: {
    textAlign: "center",
    fontSize: hp(6.5),
    marginTop: hp(5),
    fontFamily:'outfit-bold'
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: wp(15),
    marginTop: hp(7),
    borderRadius: 30,
  },
});
