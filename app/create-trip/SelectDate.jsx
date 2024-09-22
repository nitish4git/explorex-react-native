import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { router, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectDate = () => {
  const navigation = useNavigation();
  const minDate = new Date(); //today date
  // const maxDate = new Date(2024 , 10 , 5) // future date (YY/MM/DD)
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
      headerTitleStyle: { color: "black", fontFamily: "outfit-bold" },
      headerTintColor: "black",
    });
  });
  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      const initialDate = moment(date);
      setStartDate(initialDate.format("MMMM Do YYYY"));
    } else {
      const finalDate = moment(date);
      setEndDate(finalDate.format("MMMM Do YYYY"));
    }
  };

  const onDateSelection = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please Select Travel Date");
      return;
    }
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
    });
    router.push("/create-trip/Review");
  };

  return (
    <View style={styles.dateContainer}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, paddingTop: 15 }}>
        Travel Date
      </Text>
      <View style={styles.calendar}>
        <CalendarPicker
          minDate={minDate}
          maxRangeDuration={10}
          selectedRangeStyle={{ backgroundColor: "black" }}
          selectedDayTextStyle={{ color: "white" }}
          onDateChange={onDateChange}
          allowRangeSelection={true}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          marginHorizontal: 40,
          borderRadius: 33,
          marginTop: 30,
        }}
        onPress={onDateSelection}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 18,
            padding: 15,
            textAlign: "center",
            color: "aliceblue",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDate;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 20,
  },
  dateContainer: {
    marginTop: 55,
    padding: 15,
  },
});
