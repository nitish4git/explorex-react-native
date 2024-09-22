import { FlatList, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { BudgetCategory } from "../constants/BudgetCategory";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../context/CreateTripContext";

const Budget = () => {
  const [selectedBudget, setSelectedBudget] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: " ",
      headerTransparent: true,
    });
  });
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    setTripData({ ...tripData, budget: selectedBudget });
  }, [selectedBudget]);

  const onBudgetSelect = () => {
    if (!selectedBudget) {
      ToastAndroid.show("Please Select your budget", ToastAndroid.LONG);
    }
    console.log(tripData?.budget);
    router.push("SelectDate");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <View style={{ padding: 20, paddingTop: 100 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 40 }}>Budget</Text>
        <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
          Choose Spending Habbits for your trips
        </Text>
      </View>
      <FlatList
        data={BudgetCategory}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.budgetOption,
              selectedBudget == item.category && {
                borderWidth: 2,
                borderColor: "black",
                backgroundColor: "white",
              },
            ]}
            onPress={() => setSelectedBudget(item.category)}
            key={item.id}
          >
            <View style={styles.iconContainer}>
              <View style={{ padding: 8 }}>
                <Text style={styles.budgetText}>{item.category}</Text>
                <Text style={{fontFamily:'outfit'}}>{item.desc}</Text>
              </View>
              <View >
              <Text style={{fontSize:30 , paddingRight: 10 , }}>{item.icon}</Text>

              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{
          marginBottom: 100,
          backgroundColor: "black",
          marginHorizontal: 50,
          borderRadius: 33,
        }}
        onPress={onBudgetSelect}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 16,
            padding: 15,
            color: "aliceblue",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Budget;
const styles = StyleSheet.create({
  iconContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  budgetOption: {
    backgroundColor: "#E1EBEE",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 13,
    borderRadius: 13,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  budgetText: {
    // padding: 15,
    fontFamily: "outfit-bold",
    fontSize: 19,
  },
});
