import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const ExpensesLanding = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <View>
        <Text style={{textAlign:'center', fontSize:50}}>💰</Text>
        <Text style={{fontFamily:'outfit-bold',fontSize:26,marginTop: 15 ,textAlign:'center'}}>Add Expenses Here..</Text>
        <Text style={{fontFamily:'outfit',fontSize:18,marginTop: 15,textAlign:'center'}}>From zero to hero—track every cent.</Text>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={{color:'aliceblue', fontFamily:'outfit-medium', padding:15, textAlign:'center'}}
        onPress={()=>router.push('/expenses-cal/Tripdetails')}
        >
            Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpensesLanding;

const styles = StyleSheet.create({
    startButton:{
        backgroundColor:'black',
        width: 150,
        marginTop: 40,
        borderRadius: 13
    },
    container:{
        backgroundColor:'aliceblue',
        height:'100%',
        paddingTop:250,
        alignItems:'center',
        
    }
});
