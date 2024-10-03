import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
  ToastAndroid,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Category } from "../../constants/Category";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addHistory } from "../../redux/historySlice";
const Addexpense = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter();
  const [inputAmount, setInputAmount] = useState();
  const [reason, setReason] = useState("");
  const [category, setCategory] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: "",
      headerTransparent: true,
    });
  });

  let bgColor = "red";
  if (category) bgColor = "red";
  const handleCategory = (value) => {
    setCategory(value);
  };
  const handleAddExpense = () => {
    if (!inputAmount) {
      ToastAndroid.show("Enter Amount", ToastAndroid.LONG);
    } else if (!reason) {
      ToastAndroid.show("Enter Reason", ToastAndroid.LONG);
    } else if (category == null) {
      ToastAndroid.show("Select Category", ToastAndroid.LONG);
    } else {
      dispatch(addHistory({ inputAmount, reason, category }));
      setInputAmount();
      setReason();
      setCategory(null);
      router.push("/expenses-cal/ExpenseHistory");
    }
  };
  return (
    <View
      style={{
        paddingTop: hp(10),
        backgroundColor: "red",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: wp(4) }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: hp(3),
            color: "aliceblue",
          }}
        >
          Add Expense
        </Text>

        <Text
          style={{ fontFamily: "outfit", fontSize: hp(2), color: "silver" }}
        >
          Track your all expenses
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/expenses-cal/ExpenseHistory")}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: hp(1.5),
              color: "black",
              paddingRight: wp(2),
              textDecorationLine: "underline",
            }}
          >
            View all expenses
          </Text>
          <FontAwesome6
            name="arrow-right-from-bracket"
            size={hp(1.5)}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "aliceblue",
          flex: 1,
          paddingHorizontal: wp(2),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: hp(5),
        }}
      >
        <View style={{ marginTop: hp(3) }}>
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Amount </Text>
            <TextInput
              style={styles.inputData}
              placeholder="Amount"
              value={inputAmount}
              onChangeText={(value) => setInputAmount(value)}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>For what ? </Text>
            <TextInput
              style={styles.inputData}
              placeholder="Reason"
              value={reason}
              onChangeText={(value) => setReason(value)}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#F88379",
      fontFamily: "outfit-bold",
      fontSize: hp(1.8),
      paddingLeft:wp(2)
            }}
          >
            Select Category
          </Text>
          <View style={[styles.categoryCard]}>
            <FlatList
              data={Category}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.categoryItem,
                      category === item.category && {
                        backgroundColor: "tomato",
                      },
                    ]}
                    onPress={() => handleCategory(item.category)}
                  >
                    <Text
                      style={{
                        fontFamily: "outfit",
                        fontSize: hp(1.85),
                        textAlign: "center",
                        textAlignVertical: "center",
                      }}
                    >{`${item.icon} ${item.category}`}</Text>
                  </TouchableOpacity>
                );
              }}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "space-between",
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 33,
                padding: hp(2.5),
                marginTop: hp(3),
              }}
              onPress={handleAddExpense}
            >
              <Text
                style={{
                  fontFamily: "outfit-bold",
                  fontSize: hp(2),
                  color: "aliceblue",
                  textAlign: "center",
                }}
              >
                Add Amount
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Addexpense;

const styles = StyleSheet.create({
  categoryItem: {
    backgroundColor: "white",
    height: hp(6),
    width: wp(25),
    marginVertical:hp(0.5),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "tomato",
    borderWidth: 1,
  },
  categoryCard: {
    // padding: hp(1),
    paddingHorizontal:wp(3),
    paddingTop:hp(1)
  },
  display: {
    backgroundColor: "#E5E4E2",
    height: hp(15),
    borderRadius: 20,
    marginTop: hp(2),
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "outfit-bold",
    fontSize: 50,
    color: "tomato",
    shadowOffset: 10,
    shadowColor: "black",
    elevation: 5,
    borderColor: "tomato",
    borderWidth: 2,
  },
  inputField: {
    marginVertical: hp(1),
    padding: hp(1),
  },
  inputLabel: {
      color: "tomato",
      fontFamily: "outfit-bold",
      fontSize: hp(1.8),
  },
  inputData: {
    fontFamily: "outfit-medium",
    fontSize: hp(2),
    backgroundColor: "white",
    color: "black",
    padding: hp(1),
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: hp(2),
    borderColor: "tomato",
    borderWidth: 1,
  },
});
