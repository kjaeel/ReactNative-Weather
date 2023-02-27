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
import  {TopBar} from '../../components/TopBar'


export const Home = ({navigation}) => {
 
  const [topMessage, setTopMessage] = useState('');
  const logo = require('../../assets/spash.png');

  let array = {
    array: [
      {
        key: '1',
        // func: () => callSpecificFeature('Cheap'),
     
        name: 'Home',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
       
        
      },
      {
        key: '2',
        // func: () => callSpecificFeature('London'),
    
        name: 'Top News',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '3',
        // func: () => callSpecificFeature('City'),

        name: 'Videos',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '4',
        // func: () => callSpecificFeature('Wellness'),
   
        name: 'Education',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
    ],
  };

  return (
   
 <View style={styles.centered}>
   <TopBar />
     
     <ScrollView  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.hText}
    
      >

{array.array.map(info => {
               
                    return (
                      // <HomeCategories
                      //   key={info.key}
                      //   onPressFunc={info.func}
                      //   image={info.image}
                      //   name={info.name}
                      // />
                      <Text style={styles.scrollText}>
                      {info.name}

                    </Text>
                    );
                  })}
                  
                

                 

     </ScrollView>


              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
          
                style={{marginTop: 10, height: 400}}
               >
                { (
                  array.array.map(info => {
                    return (
                      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                        <HomeNewsCard
                          // flag={true}
                          key={info.name}
                          image={logo}
                          text={'info.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Name'}
                         
                        />
                      </TouchableOpacity>
                    );
                  })
           
                )}
              </ScrollView>




                <ScrollView 
                style={{marginBottom: 10, }}
                contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}
                horizontal={false}
                >
                { (
                  array.array.map(info => {
                    return (
                      <TouchableOpacity
                      //  onPress={() => bindData(info)}
                       >
                      
                         <HomeNewsText
                          key={info.name}
                          image={logo}
                          text={info.text}
                         />
                      </TouchableOpacity>
                    );
                  })
           
                )}
               
                </ScrollView>
             

  </View>
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
  }
 
});
