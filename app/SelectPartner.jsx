import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SelectTravelerList } from "../constants/Options";
import { CreateTripContext } from "../context/CreateTripContext";

const SelectPartner = () => {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  });
  const [traveler, setTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    setTripData({ traveler: traveler });
  }, [traveler]);

  const onSelectTraveler = () => {
    if (!traveler) {
      ToastAndroid.show("Please Select Taveler", ToastAndroid.LONG);
      return;
    }
    console.log(tripData?.traveler);
    router.push("/Budget");
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "aliceblue",
          paddingLeft: 20,
          paddingTop: 45,
        }}
      >
        <Text
          style={{ paddingTop: 55, fontFamily: "outfit-bold", fontSize: 25 }}
        >
          Who's Travelling ?
        </Text>
        <View>
          <Text style={{ fontFamily: "outfit", fontSize: 14, color: "gray" }}>
            Choose your partner{" "}
          </Text>
        </View>
        {SelectTravelerList.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.optionCard,
                traveler == item.title && {
                  borderWidth: 2,
                  backgroundColor: "white",
                },
              ]}
              onPress={() => setTraveler(item.title)}
              key={index}
            >
              <View>
                <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>
                  {item.title}
                </Text>
                <Text style={{ fontFamily: "outfit", fontSize: 14 }}>
                  {item.desc}
                </Text>
              </View>
              <Text style={{ fontSize: 32}}>{item.icon}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            marginHorizontal: 40,
            marginTop: 30,
            borderRadius: 33,
          }}
          onPress={onSelectTraveler}
        >
          <Text
            style={{
              color: "aliceblue",
              textAlign: "center",
              fontFamily: "outfit-medium",
              padding: 15,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SelectPartner;

const styles = StyleSheet.create({
  optionCard: {
    backgroundColor: "#E1EBEE",
    marginTop: 20,
    padding: 19,
    borderRadius: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    paddingHorizontal: 20,
  },
});
