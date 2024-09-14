import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const Signup = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
          headerTitle: " ",
        });
      }, []);
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})