import { StyleSheet, Text, View, FlatList , Image } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import EmptyList from "./EmptyList";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import randomImages from "../../assets/images/RandomImages";
import { useSelector } from "react-redux";
const RecentTrips = () => {
  const router = useRouter();
  const Trips = useSelector((state)=> state.trip.trips)

  return (
    <View>
      <View
        style={{
          paddingTop: 65,
          paddingLeft: 15,
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
              <Text style={{ fontFamily: "outfit-medium", fontSize: 33 }}>
                Recent Trips
              </Text>
              <Text
                style={{ fontFamily: "outfit", fontSize: 17, color: "gray" }}
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
                  marginRight: hp(2),
                }}
                onPress={() => router.push("/expenses-cal/Addtrip")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <FlatList
              data={Trips}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.flatlistItem}
                    onPress={() => router.push("/expenses-cal/Addexpense")}
                  >
                    <View style={styles.cardDetails}>
                      <Image source={randomImages()} style={styles.cardImage} />
                      <View style={styles.cardText}>
                        <View>

                       
                        <Text
                          style={{
                            textAlign: "center",
                            fontFamily: "outfit-medium",
                            fontSize: 20,
                            color: "#505050",
                          }}
                        >
                          {item.place}
                        </Text>
                        <Text style={{fontFamily:'outfit', fontSize:14}}>{item.country}</Text>
                        </View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontFamily: "outfit-medium",
                            fontSize: 20,
                            color: "#505050",
                          }}
                        >
                          {item.tripDate}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={<EmptyList />}
              // keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              style={{marginBottom: hp(12)}}
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
    width: hp(40),
    marginHorizontal: hp(1),
    marginTop: hp(1),
    borderRadius: 10,
  },
  flatlistItem: {
    backgroundColor: "#E8E8E8",
    marginTop: hp(2),
    marginRight: hp(2.4),
    paddingBottom: hp(2),
    borderRadius: 10,
  },
  card: {
    // height: "100%",
    marginBottom: hp(15),
  },
});
