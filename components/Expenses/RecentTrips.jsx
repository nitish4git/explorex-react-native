import { StyleSheet, Text, View, FlatList , ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import EmptyList from "./EmptyList";
import { useRouter } from "expo-router";
const RecentTrips = () => {
    const router = useRouter()
  const Trips = [
    {
      id: "1",
      place: "India",
      date: "Sep 19 2024",
      cityImage: require("../../assets/images/city.jpg"),
    },
    {
      id: "2",
      place: "Goa",
      date: "Sep 19 2024",
      cityImage: require("../../assets/images/city.jpg"),
    },
    {
      id: "3",
      place: "USA",
      date: "Sep 11 2024",
      cityImage: require("../../assets/images/city.jpg"),
    },
    {
      id: "4",
      place: "UK",
      date: "Sep 19 2024",
      cityImage: require("../../assets/images/city.jpg"),
    },
    {
      id: "5",
      place: "Dubai",
      date: "Sep 10 2024",
      cityImage: require("../../assets/images/city.jpg"),
    },
    {
        id: "44",
        place: "UK",
        date: "Sep 19 2024",
        cityImage: require("../../assets/images/city.jpg"),
      },
      {
        id: "05",
        place: "Dubai",
        date: "Sep 10 2024",
        cityImage: require("../../assets/images/city.jpg"),
      },
      {
        id: "40",
        place: "UK",
        date: "Sep 19 2024",
        cityImage: require("../../assets/images/city.jpg"),
      },
      {
        id: "50",
        place: "Dubai",
        date: "Sep 10 2024",
        cityImage: require("../../assets/images/city.jpg"),
      },
      {
        id: "50",
        place: "Dubai",
        date: "Sep 10 2024",
        cityImage: require("../../assets/images/city.jpg"),
      },
  ];
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
          <Text style={{ fontFamily: "outfit-bold", fontSize: 33 }}>
            Recent Trips
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: "gray" }}>
            Explore like a boss
          </Text>
          <View style={styles.card}>
            <FlatList
              data={[]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.flatlistItem}
                  onPress={()=>router.push('/expenses-cal/Addexpense')}
                  >
                    <View style={styles.cardDetails}>
                    <Text style={{textAlign:'center',fontFamily:'outfit',fontSize:15 , color:'aliceblue'}}>{item.place}</Text>
                    <Text style={{textAlign:'center',fontFamily:'outfit',fontSize:15 , color:'aliceblue'}}>{item.date}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={<EmptyList />}
              numColumns={2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentTrips;

const styles = StyleSheet.create({
   
    cardDetails:{
        backgroundColor:'black',
        marginTop:'58%',
        height:'50%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingTop:25,
        opacity:0.5
    },
  flatlistItem: {
    margin: 4,
    backgroundColor:"white",
    height: 180,
    width: "46%",
    borderRadius:20,
    
  },
  card: {
    paddingTop: 20,
    margin: 4,
    paddingBottom:140
  },
});
