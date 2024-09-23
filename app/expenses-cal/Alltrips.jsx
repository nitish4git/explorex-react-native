// import { FlatList, StyleSheet, Text, View , ImageBackground } from "react-native";
// import React from "react";
// import ExpensesLanding from "../../components/Expenses/ExpensesLanding";
// import { TouchableOpacity } from "react-native";
// const Alltrips = () => {
//   const Trips = [
//     {
//       place: "India",
//       date: "Sep 19 2024",
//       cityImage:require('../../assets/images/city.jpg')
//     },
//     {
//       place: "Goa",
//       date: "Sep 19 2024",
//       cityImage:require('../../assets/images/city.jpg')
//     },
//     {
//       place: "USA",
//       date: "Sep 11 2024",
//       cityImage:require('../../assets/images/city.jpg')
//     },
//     {
//       place: "UK",
//       date: "Sep 19 2024",
//       cityImage:require('../../assets/images/city.jpg')
//     },
//     {
//       place: "Dubai",
//       date: "Sep 10 2024",
//       cityImage:require('../../assets/images/city.jpg')
//     },

//   ];

//   return (
//     <View style={{flex:1 , backgroundColor:'aliceblue'}}>
//       {/* <ExpensesLanding/> */}
//       <View style={{ paddingTop: 65, paddingLeft: 15 }}>
//         <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>
//           Recent Trips{" "}
//         </Text>
//         <Text style={{ fontFamily: "outfit", fontSize: 17, color: "gray" }}>
//           Travel like a boss
//         </Text>
//       </View>
//       <View style={{ display:'flex', alignItems:'center' , marginHorizontal: 10 , marginTop: 20}}>
//         <FlatList
//           data={Trips}
//           renderItem={({ item }) => {
//             return (
//               <ImageBackground source={item.cityImage} style={styles.backGroundImage}>
//               <TouchableOpacity style={styles.tripsCard}>
//                 <View style={styles.cardData}>
//                   <Text style={{color:'aliceblue',fontFamily:'outfit',fontSize:15,textAlign:'center'}}>{item.place}</Text>
//                   <Text style={{color:'aliceblue',fontFamily:'outfit',fontSize:10,textAlign:'center'}}>{item.date}</Text>
//                 </View>
//               </TouchableOpacity>
//               </ImageBackground>
//             );
//           }}
//         //   ListEmptyComponent={<ExpensesLanding/>}s
//         numColumns={2}
//         showsVerticalScrollIndicator={false}

//         />
//       </View>
//     </View>
//   );
// };

// export default Alltrips;

// const styles = StyleSheet.create({
//   tripsCard: {
  
//     height:200,
//     width:185,
    
//   },
//   backGroundImage:{
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     margin: 4,
//     borderRadius: 10,
    
//   },
//   cardData:{
//     backgroundColor:'black',
//    height:'50%',
//     marginTop:'55%',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingTop: 20
//   }
// });
