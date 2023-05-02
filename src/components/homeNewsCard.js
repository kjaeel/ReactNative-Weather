import React, { useRef, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,Animated
} from 'react-native';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';


export default function HomeNewsCard(props, flag) {

    const logo = require('../assets/slider2.png');

  

  //const navigation = useNavigation();
  return (

    <View
      style={{
        backgroundColor: '#fff',
        // paddingRight: 12,
        paddingTop: 7,
        marginLeft: 24,
        
      }}>
        
      <ImageBackground
        resizeMode="cover"
        style={{
        //   paddingBottom: 10,
        //   borderRadius: 30,
        //   overflow: 'hidden',
        //   borderWidth: 0.1,
          width: 314,
          height: 219,
          
        }}
        source={logo}>
    {/* source={{uri: props.image}}> */}
        
     
        <View style={styles.overlay}/>

        <View style={{position: 'absolute', top: 160, left: 10, marginRight: 20}}>
            <Text style={{color: 'white', fontFamily: 'Roboto-Bold', fontSize: 16}} 
      
            numberOfLines={2}
            >
            {props.text}
            </Text>
        </View>
      
      </ImageBackground>

      
    </View>
 
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.2,
    backgroundColor: 'black',
    height: 219,
    width: 314,
    borderRadius: 30,
  },
});
