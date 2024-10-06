import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import EmptyList from "./EmptyList";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import randomImages from "../../assets/images/RandomImages";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addHistory } from "../../redux/historySlice";

const RecentTrips = () => {
  const router = useRouter();
  const Trips = useSelector((state) => state.trip.trips);
  const dispatch = useDispatch();
  const handleTrip = (value)=>{
   router.push('/expenses-cal/Addexpense')
  }

  return (
    <View>
      <View
        style={{
          paddingTop: hp(7),
          paddingHorizontal: wp(4),
          height: "100%",
          backgroundColor: "aliceblue",
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ fontFamily: "outfit-medium", fontSize: hp(5) }}>
                Recent Trips
              </Text>
              <Text
                style={{ fontFamily: "outfit", fontSize: hp(2), color: "gray" }}
              >
                Explore like a boss
              </Text>
            </View>
            <View>
              <Ionicons
                name="add-circle"
                size={24}
                color="black"
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  paddingTop: hp(2),
                  // marginRight: hp(2),
                }}
                onPress={() => router.push("/expenses-cal/Addtrip")}
              />
            </View>
          </View>
            <View style={styles.card}>
              <FlatList
                data={[]}
                renderItem={({item}) => {
                  return (
                    <Pressable
                      onPress={()=>handleTrip(item)}
                    >
                      <LinearGradient
                        colors={["#ff0000", "#2b1637"]}
                        style={styles.flatlistItem}
                        start={{ x: 2, y: 0 }}
                        end={{ x: 1, y: 5 }}
                      >
                        <View style={styles.cardDetails}>
                          <Image
                            source={randomImages()}
                            style={styles.cardImage}
                          />
                          <View style={styles.cardText}>
                            <View>
                              <Text
                                style={{
                                  textAlign: "center",
                                  fontFamily: "outfit-medium",
                                  fontSize: 20,
                                  color: "aliceblue",
                                  textTransform:'capitalize'
                                }}
                              >
                                {item.place}
                              </Text>
                              <Text
                                style={{
                                  fontFamily: "outfit",
                                  fontSize: 14,
                                  color: "silver",
                                  textTransform:'capitalize'
                                }}
                              >
                                {item.country}
                              </Text>
                            </View>
                            <View>
                              <Text
                                style={{
                                  textAlign: "center",
                                  fontFamily: "outfit-medium",
                                  fontSize: 20,
                                  color: "aliceblue",
                                }}
                              >
                                {item.tripDate}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </LinearGradient>
                    </Pressable>
                  );
                }}
                ListEmptyComponent={<EmptyList />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: hp(12) }}                
              />
            </View>         
        </View>
      </View>
    </View>
  );
};

export default RecentTrips;

const styles = StyleSheet.create({
  cardText: {
    paddingTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: hp(2),
  },

  cardImage: {
    resizeMode: "cover",
    height: hp(20),
    width: "100%",
    borderRadius: 10,
  },
  flatlistItem: {
    marginTop: hp(2),
    paddingBottom: hp(2),
    borderRadius: 10,
    padding: hp(0.5),
  },
  card: {
    // height: "100%",
    paddingBottom: hp(18),
    backgroundColor: "red",
    backgroundColor: "transparent",
    // flex:1
  },
  loadingGif: {
    alignSelf: "center",
    // marginTop:hp()
    marginTop: hp(15),
    verticalAlign: "bottom",
  },
});
