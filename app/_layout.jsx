import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";
import { CreateTripContext } from "../context/CreateTripContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const layout = () => {
  const [loaded, error] = useFonts({
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
   [tripData, setTripData] = useState([]);
const [isLogin , setIslogin] = useState(false);
const checkLogin = async ()=>{
  const data = await AsyncStorage.getItem("isLoggedIn");
  setIslogin(data)
  console.log(data)
}
useEffect(()=>{
  checkLogin();
},[])
  return (
      <Provider store={store}>
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        <Stack screenOptions={{ headerShown: false }}>
          {
            isLogin ? 
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> : 
          <Stack.Screen name='index' options={{headerShown:false}}/>
          }
        </Stack>
      </CreateTripContext.Provider>
    </Provider>
    )
};

export default layout;

const styles = StyleSheet.create({});
