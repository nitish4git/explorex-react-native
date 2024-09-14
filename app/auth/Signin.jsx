import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Login from "../../components/Account/Login";
import { useNavigation } from "expo-router";
const Signin = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: " ",
    });
  }, []);

  return (
    <View>
      <Login />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
