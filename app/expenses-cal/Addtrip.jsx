import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/tripSlice";
import axios from "axios";
const Tripdetails = () => {
  const navigation = useNavigation();
  const [place, setPlace] = useState();
  const [country, setCountry] = useState();
  const [tripDate, setTripDate] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  });
  const handleAddTrip = async () => {
   
    if (!place) {
      ToastAndroid.show("Enter Location", ToastAndroid.LONG);
      return;
    } else if (!country) {
      ToastAndroid.show("Enter country", ToastAndroid.LONG);
      return;
    } else if (!tripDate) {
      ToastAndroid.show("Select Data", ToastAndroid.LONG);
      return;
    } else {
      try {
        setLoading(true);
        const res = await axios.post("http://192.168.1.11:5000/api/addTrip" , {place , country , tripDate});
        dispatch(addTrip(res.data));
        // console.log(res.data)
      } catch (error) {
        console.log("Getting some error" , error)
      }
      setPlace("");
      setCountry("");
      setTripDate("");
      router.back("/expenses/RecentTrip");
    }
  };

  // Date Picker

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    setTripDate(`${parseInt(x1[2]) + 1}/${x1[1]}/${x1[0]}`);
    hideDatePicker();
  };

  // End of date picker
  return (
    <View style={{ backgroundColor: "aliceblue", flex: 1 }}>
      <View style={{ paddingTop: hp(10), marginHorizontal: wp(7) }}>
        <View>
          <Text style={{ fontFamily: "outfit-bold", fontSize: hp(5) }}>
            Trip Details
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(2),
              color: "gray",
            }}
          >
            Rememner your happiness
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={{ marginBottom: hp(3) }}>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Location
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setPlace(value)}
              placeholder="Location"
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Country
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Country"
              onChangeText={(value) => setCountry(value)}
              value={country}
            />
          </View>
          <View>
            <Text
              style={{
                color: "tomato",
                fontFamily: "outfit-bold",
                fontSize: hp(1.8),
              }}
            >
              Select Date
            </Text>
            <Pressable onPress={() => showDatePicker()}>
              <TextInput
                style={styles.textInput}
                placeholder="Select date"
                value={tripDate}
                readOnly
              />
            </Pressable>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 15,
                borderRadius: 33,
                marginTop: 40,
              }}
              onPress={handleAddTrip}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 15,
                  color: "aliceblue",
                  textAlign: "center",
                }}
              >
                Add Trip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Tripdetails;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  textInput: {
    borderBlockColor: "black",
    borderBottomWidth: 2,
    padding: hp(0.3),
    color: "black",
  },
});
