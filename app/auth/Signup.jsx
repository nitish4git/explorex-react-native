import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Register from '../../components/Account/Signup'
import { useNavigation } from 'expo-router';

const Signup = () => {
  const navigation = useNavigation();
  useEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Register />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({})