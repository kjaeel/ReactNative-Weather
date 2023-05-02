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

import Icon from "react-native-vector-icons/Entypo";
import { NewsCard } from '../../components/newsCard';
import { AdBanner } from '../../components/adBanner';

export const SavedNews =({navigation, props}) => {
 
  const [topMessage, setTopMessage] = useState('');
  const modiji = require('../../assets/modiji.png');
  const search = require('../../assets/Vector.png');
  let array = {
    array: [
      {
        key: '1',
        // func: () => callSpecificFeature('Cheap'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
       
        
      },
      {
        key: '2',
        // func: () => callSpecificFeature('London'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        name: 'Home',
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '3',
        // func: () => callSpecificFeature('City'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala SitharamanBudget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '4',
        // func: () => callSpecificFeature('Wellness'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        photoUrl:  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rishi_Sunak_Official_Cabinet_Portrait%2C_September_2021_%28cropped%29.jpg",
        time: '7 mion',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      

     

      
      
    ],
  };

  return (
   
 <ScrollView style={styles.centered}>
  <View style={{ flexDirection: "row", margin: 24 }}>
    {/* <View style={{ flex: 1, marginTop: 5, marginRight: 10 }}>
      <TouchableOpacity
    //    onPress={() => props.onPressFunc()}
        style={{ marginTop: 1, marginRight: 0, backgroundColor: 'white', borderRadius: 30, height: 30, width: 30,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3, }}
      >
        <Icon name="chevron-left" size={30} color={'#024092'} style={{marginLeft: 3, marginTop: 3}}/>
      </TouchableOpacity>
    </View> */}
    <View style={{ flex:11 }}>
   
        <Text
        style={{
          color: "#024092",
          fontFamily: "Roboto-Bold",
          fontSize: 28,
          marginTop: 5,
        }}
        numberOfLines={1}
      >
       Saved News
      </Text>
    
    </View>
    <View style={{ flex: 1 }}>
     
      <TouchableOpacity
        //   onPress={() => props.onPressDots()}
        style={{ marginTop: 5, marginLeft: -5 }}
      >
         <Image source={search} />
      </TouchableOpacity> 
      
     
    </View>
  </View>
  <View style={{paddingBottom: 0}}>
 
  { (array.array.map(info => {
                    return (
                        
                        <NewsCard 
                        flag={'news'}
                        photoUrl={info.photoUrl}
                        time={info.time}
                        message={info.text}
                        />
                     

                    )}))}
  <AdBanner />
  </View>
       
               
             

  </ScrollView>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
//  justifyContent: 'center',
//  alignContent: 'center',
//   alignItems: 'center',
zIndex: 1,
  backgroundColor: '#fff'
  },
  hText: {
    marginLeft: 16,
    marginRight: 24,
    // margin: 24,
    // marginBottom: 90
    // backgroundColor: 'red',
    height: 60
  },
  scrollText: {
    margin: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16
  },
  centeredImage: {
   
      width: '96%',
      marginTop: 5,
      paddingTop: 20,
      alignSelf:'center'
  },
  desc: {
    marginLeft: 32,
    // marginTop: 12,
       marginRight: 32,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#3A434F'
  },
  desc1: {
    marginLeft: 32,
    marginRight: 5,
    // marginTop: 12,
    
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    // width: 390
  },
  descText: {
    marginLeft: 32,
    marginRight: 10,
    // marginTop: 12,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#3A434F',
    paddingBottom: 100
  }
 
});
