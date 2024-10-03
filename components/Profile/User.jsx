import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const User = () => {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "red" }}>
      <View style={{ paddingHorizontal: wp(3), paddingBottom: hp(2) }}>
        <View
          style={{
            paddingTop: hp(10),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/images/Banner.jpeg")}
              style={styles.userImage}
            />
          </View>
          <View style={{ marginLeft: hp(2) }}>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: hp(3),
                color: "aliceblue",
              }}
            >
              Nitish Kumar
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: hp(2),
                color: "white",
                marginLeft: hp(0.5),
              }}
            >
              nitish.dev@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopLeftRadius: 20,
          backgroundColor: "aliceblue",
          height: "100%",
          borderTopRightRadius: 20,
        }}
      >
        <View style={styles.myaccCard}>
          <Text style={{ fontSize: hp(2.5) }}>✈️</Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(2.5),
              paddingLeft: wp(4),
            }}
          >
            Recent Trips
          </Text>
        </View>
        <View style={styles.myaccCard}>
          <Text style={{ fontSize: hp(2.5) }}>⚙️</Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(2.5),
              paddingLeft: wp(4),
            }}
          >
            Account settings
          </Text>
        </View>
        <TouchableOpacity style={styles.myaccCard}
        onPress={()=>router.push("/about/About")}
        >
          <Text style={{ fontSize: hp(2.5) }}>🤖</Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(2.5),
              paddingLeft: wp(4),
            }}
          >
            About us
          </Text>
        </TouchableOpacity>
        <View style={styles.myaccCard}>
          <Text style={{ fontSize: hp(2.5) }}>📤</Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(2.5),
              paddingLeft: wp(4),
            }}
          >
            Log out
          </Text>
        </View>
        <View style={{paddingTop:hp(3)}}>

        <Text style={{textAlign:'center', fontFamily:'outfit', fontSize:hp(1.5)}}>Develelop by Nitish Roy❤️</Text>
        </View>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  profileImage: {
    height: hp(10),
    width: hp(10),
    backgroundColor: "green",
    borderRadius: 150,
  },
  userImage: {
    resizeMode: "cover",
    height: hp(10),
    width: hp(10),
    borderRadius: 150,
  },
  myaccCard: {
    paddingHorizontal: wp(4),
    marginTop: hp(1),
    borderBlockColor: "gray",
    borderBottomWidth: 0.5,
    padding: hp(2),
    flexDirection: "row",
    alignItems: "center",
  },
});
