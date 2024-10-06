import { Image, StyleSheet, Text, View} from 'react-native'
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Animated ,{useSharedValue , withTiming , useAnimatedStyle , Easing}from 'react-native-reanimated'

const Toastmessage = ({type , message , info ,duration = 3000 , visible}) => {
    const translateY = useSharedValue(0);
    useEffect(()=>{
        if(visible){
            translateY.value = withTiming(-150,{
                duration:200,
                easing:Easing.out(Easing.ease),
            });
            setTimeout(()=>{
                translateY.value = withTiming(150 , {
                    duration:300,
                    easing:Easing.in(Easing.ease),
                }, duration);
            })
        }
    },[visible])
    const animationStyle = useAnimatedStyle(()=>{
        return {
            transform:[{translateY: translateY.value}],
        }
    })
  return (
     <Animated.View style={[styles.container, { borderColor:type=="ERROR"?'red':type=='SUCCESS'?'green' : type=="WARNING"? "orange" : null } ,animationStyle]}>
        <View style={[styles.sideContainer , { backgroundColor:type=="ERROR"?'red':type=='SUCCESS'?'green' : type=="WARNING"? "orange" : null }]}></View>
        <View style={styles.icon}>
            {
                type == "SUCCESS" ? <Image source={require('../../assets/images/check.png')}style={styles.imageIcon}/> : type == "ERROR" ? <Image source={require('../../assets/images/close.png')} style={styles.imageIcon}/> :type == "WARNING" ? <Image source={require('../../assets/images/warning.png')}style={styles.imageIcon}/> : null
            }
        </View>
        <View style={styles.textContainer}>
            <View style={styles.insideText}><Text style={{textAlign:'center'}}>{message}</Text></View>
            <View style={styles.insideText}><Text style={{fontSize:10, textAlign:'center', color:'gray'}}>{info}</Text></View>
        </View>
       

     </Animated.View>
  )
}

export default Toastmessage

const styles = StyleSheet.create({
    container:{
        height:hp(8),
        width:wp(85),
        alignSelf:'center',
        backgroundColor:'aliceblue',
        borderWidth:1,
        borderRadius:10,
        overflow:'hidden',
        flexDirection:'row',
        alignItems:'center',
        elevation:5,
        shadowOffset:{x:10, y:0},
        position:'absolute',
        bottom:-60
        
    },
    sideContainer:{
        width:wp(2),height:"100%", 
    },
    icon:{
        height:hp(4.5),
        width:hp(4.5),
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp(4),
        borderRadius:20
    },
    imageIcon:{
        height:hp(4),
        width:hp(4),
    },
    insideText:{
        marginLeft:wp(2)
    },textContainer:{alignSelf:"center",  height:'100%', justifyContent:'center', width:'70%'}
})