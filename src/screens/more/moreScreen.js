/* eslint-disable react-native/no-inline-styles */
/*
 * Login page that allows user to login using email and password or a social provider
 */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,

  StyleSheet,

 ScrollView,
 Image, 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeNewsCard from '../../components/homeNewsCard';
import { HomeNewsText } from '../../components/homeNewsText';
import  {TopBarBack} from '../../components/TopBarBack'


export const MoreScreen =({navigation}) => {
 
  const [topMessage, setTopMessage] = useState('');



  return (
   
 <View >
 <Text>
New page
 </Text>
  </View>
  );
};
// const styles = StyleSheet.create({
  
//   }
 
// });
