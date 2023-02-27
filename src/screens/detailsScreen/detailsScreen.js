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


export const DetailsScreen =({navigation}) => {
 
  const [topMessage, setTopMessage] = useState('');
  const modiji = require('../../assets/modiji.png');

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
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
 
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      
    ],
  };

  return (
   
 <ScrollView style={styles.centered}>
   <TopBarBack 
   onPressFunc={() => navigation.goBack()}
   />
     
  
            <View>
              <Image source={modiji} style={styles.centeredImage}/>
            </View>

              <Text style={styles.desc}>
              Description
              </Text>


              <Text style={styles.desc1}>
              PM Modi Live | PM Narendra 
Modi Addresses Global 
Business Summit
              </Text>

              <Text style={{...styles.desc, marginTop: 12}}>
              Summary
              </Text>


                <ScrollView 
                style={{paddingBottom: 30, }}
                contentContainerStyle={{ marginTop: 20 }}
                horizontal={false}
                >
                <Text style={styles.descText}>
                1. A council is a group of individuals who come together 
to make decisions on behalf of an organization or 
community. 
{'\n'}{'\n'}
2. The council can take different forms, such as a local 
government council, a school board, a community 
organization, 
{'\n'}{'\n'}
3. or a business board. Council members are usually 
elected or appointed to serve for a set term and are 
responsible for making decisions that affect the 
organization or community they represent. 
{'\n'}{'\n'}
4. These decisions can include setting budgets, 
approving policies, and overseeing programs. Councils 
typically meet on a regular basis, with agendas and 
minutes available to the public. 
{'\n'}{'\n'}
5. Council members have a responsibility to act in the 
best interests of their constituents and to uphold the 
values and principles of the organization they represent. 
{'\n'}{'\n'}
6. Effective council governance requires transparency, 
accountability, and the ability to work collaboratively 
with other members to achieve shared goals. 
{'\n'}{'\n'}
7. In addition to making decisions, councils may have 
committees or subgroups that specialize in specific 
areas and may hold public hearings or town hall 
meetings to gather input from members of the 
community before making important decisions.
                </Text>
               
                </ScrollView>
             

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
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#3A434F'
  },
  desc1: {
    marginLeft: 32,
    // marginTop: 12,
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    width: 390
  },
  descText: {
    marginLeft: 32,
    // marginTop: 12,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#3A434F',
    paddingBottom: 100
  }
 
});
