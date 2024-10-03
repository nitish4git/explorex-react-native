import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import EmptyHistory from "../../components/Expenses/EmptyHistory";

const ExpenseHistory = () => {
  const historyDetails = useSelector((state) => state.history.historyDetails);
  const navigation = useNavigation();
  const date = new Date();
  const curMonth = date.getMonth() + 1;
  const curDay = date.getDay();
  const curYear = date.getFullYear();
  const [totalAmount , setTotalAmount] = useState(0)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  });
  return (
    <LinearGradient colors={["#ff0000", "#2b1637"]} 
    start={{x:0 , y:1}}
    end={{x:2.5 , y:0.8}}
      style={{
        paddingTop: hp(10),
        backgroundColor: "red",
      }}
    >
      <View style={{paddingHorizontal:wp(7)}}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: hp(5) , color:'aliceblue' }}>
          All Expenses
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: hp(2),
            color: "silver",
            paddingBottom: hp(2),
          }}
        >
          Know where your money goes
        </Text>
        <View style={{marginBottom:hp(2)}}>
          <Text style={{fontFamily:'outfit-bold' , fontSize:hp(2) , color:'gold'}}>Total Expenses: 0</Text>
        </View>
      </View>
      <View style={{backgroundColor:'white' , paddingHorizontal:wp(7) , height:'100%' , borderTopLeftRadius:20 , borderTopRightRadius:20}}>
      <FlatList
        data={historyDetails}
        renderItem={({ item }) => {
          return (
            <View style={styles.historyCard}>
              <View>
                <Text style={{ fontFamily: "outfit-bold", fontSize: hp(2) }}>
                  {item.category}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: hp(2),
                    color: "gray",
                  }}
                >
                  {item.reason}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontFamily: "outfit-bold", fontSize: hp(2) }}
                >{`₹${item.inputAmount}`}</Text>
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: hp(1.5),
                    color: "gray",
                  }}
                >{`${curDay}/${curMonth}/${curYear}`}</Text>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyHistory/>}
      />
      </View>
    </LinearGradient>
  );
};

export default ExpenseHistory;

const styles = StyleSheet.create({
  historyCard: {
    backgroundColor: "#f5f5f5",
    marginTop:hp(2),
    marginVertical: hp(0.7),
    paddingHorizontal: wp(5),
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: 1,
    elevation: 5,
    paddingVertical: hp(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
