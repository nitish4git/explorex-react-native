import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const User = () => {
  const router = useRouter();
  // const getUserData = async()=>{
  //   const token = await AsyncStorage.getItem('token');
  //   axios.post("http://192.168.1.3:5000/api/getUserData",{token:token}).then(res=>console.log(res.data))
  //   console.log(token)
  // }
  // useEffect(()=>{
  //   getUserData()
  // },[])
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
          <View style={styles.list}>
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
          <MaterialCommunityIcons name="greater-than" size={15} color="gray" />
        </View>
        <View style={styles.myaccCard}>
          <View style={styles.list}>
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
          <MaterialCommunityIcons name="greater-than" size={15} color="gray" />
        </View>
        <TouchableOpacity
          style={styles.myaccCard}
          onPress={() => router.push("/about/About")}
        >
          <View style={styles.list}>
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
          </View>
          <MaterialCommunityIcons name="greater-than" size={15} color="gray" />
        </TouchableOpacity>
        <View style={styles.myaccCard}>
          <View style={styles.list}>
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
        </View>
        <View style={{ paddingTop: hp(3) }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: hp(1.5),
            }}
          >
            Develelop by{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: hp(1.7),
            }}
          >
            Nitish ❤️ & Rohit ❤️
          </Text>
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
    marginHorizontal: wp(4),
    padding: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
  },
});
