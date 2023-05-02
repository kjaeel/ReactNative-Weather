/* eslint-disable react-native/no-inline-styles */
/*
 * Login page that allows user to login using email and password or a social provider
 */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
 ScrollView,
 Image, 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeNewsCard from '../../components/homeNewsCard';
import { HomeNewsText } from '../../components/homeNewsText';
import { NewsButton } from '../../components/newsCheck';
import  {TopBarBack} from '../../components/TopBarBack'
const { width, height } = Dimensions.get("window");

export const MoreScreen =({navigation}) => {
 
  const [topMessage, setTopMessage] = useState('');
  const [arrayOfTerms, setArrayOfTerms] = useState([]);
  const registerBg = require("../../assets/registerBg.png");
  const relaxation = require('../../assets/news/news1.png');
  const politics = require('../../assets/news/news2.png');
  const bollywood = require('../../assets/news/news3.png');
  const market = require('../../assets/news/news4.png');
  const health = require('../../assets/news/news5.png');
  const sports = require('../../assets/news/news6.png');
  const book = require('../../assets/news/news7.png');
  const highcourt = require('../../assets/news/news8.png');
  const interviews = require('../../assets/news/news9.png');
  const daily = require('../../assets/news/news10.png');
  const game = require('../../assets/news/news11.png');
  const bar = require('../../assets/news/news12.png');
  
  
  const toggleTerm = (term) => {
    let filtered = arrayOfTerms.filter(x => x !== term);
    const pushReturn = (innerTerm) => {
      setArrayOfTerms(previous => {
        return [...previous, innerTerm];
      });
    };
    filtered.length === arrayOfTerms.length
      ? pushReturn(term)
      : setArrayOfTerms(filtered);
  };


console.log(arrayOfTerms)

  return (

    <ScrollView style={styles.centered}>
        
        <ImageBackground
          source={registerBg}
          resizeMode="stretch"
          style={{
            height: height,
            position: "absolute",
            width: width,
            opacity: 1,
            top: 0,
            bottom: 200,
            left: 0,
            right: 0,
            //  alignItems: 'center',
          }}
        />
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
      <View style={{ flex: 11 }}>
     
          <Text
          style={{
            color: "#fff",
            fontFamily: "Roboto-Bold",
            fontSize: 28,
            marginTop: 5,
          }}
          numberOfLines={1}
        >
      News Categories
        </Text>
      
      </View>
      <View style={{ flex: 1 }}>
       

       
      </View>
    </View>
    

      <View style={styles.centeredView}>

          <View style={styles.direction}>

            <View style={styles.flexNo}>
         
            <NewsButton
           title="Corporate"
           onPressFunction={() => toggleTerm('corporate')}
          //  darkImage={relaxation}
           lightImage={relaxation}    
           disabled={arrayOfTerms.length === 4 ?true : false}
           />

            </View>

            <View style={styles.flexNo}>
                 <NewsButton
           title="Politics"
           onPressFunction={() => toggleTerm('politics')}
         
           lightImage={politics}       
           disabled={arrayOfTerms.length === 4 ?true : false}
           />

            </View>

            <View style={styles.flexNo}>
            <NewsButton
               title="Bollywood"
             disabled={arrayOfTerms.length === 4 ?true : false}
           onPressFunction={() => toggleTerm('bollywood')}
          
           lightImage={bollywood}       />

            </View>

            


         
          </View>

          
        </View>


        
      <View style={styles.centeredView}>

<View style={styles.direction}>

  <View style={styles.flexNo}>

  <NewsButton
 title="Market"
 onPressFunction={() => toggleTerm('market')}
//  darkImage={relaxation}
 lightImage={market}    
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
       <NewsButton
 title="Health"
 onPressFunction={() => toggleTerm('Health')}

 lightImage={health}       
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
  <NewsButton
     title="Sports"
   disabled={arrayOfTerms.length === 4 ?true : false}
 onPressFunction={() => toggleTerm('sports')}

 lightImage={sports}       />

  </View>

  



</View>


</View>



<View style={styles.centeredView}>

<View style={styles.direction}>

  <View style={styles.flexNo}>

  <NewsButton
 title="Books"
 onPressFunction={() => toggleTerm('book')}
//  darkImage={relaxation}
 lightImage={book}    
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
       <NewsButton
 title="HC/SC"
 onPressFunction={() => toggleTerm('highcourt')}

 lightImage={highcourt}       
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
  <NewsButton
     title="Interviews"
   disabled={arrayOfTerms.length === 4 ?true : false}
 onPressFunction={() => toggleTerm('interviews')}

 lightImage={interviews}       />

  </View>

  



</View>


</View>



<View style={{...styles.centeredView, paddingBottom: 200}}>

<View style={styles.direction}>

  <View style={styles.flexNo}>

  <NewsButton
 title="Judgement"
 onPressFunction={() => toggleTerm('daily')}
//  darkImage={relaxation}
 lightImage={daily}    
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
       <NewsButton
 title="App/Game"
 onPressFunction={() => toggleTerm('game')}

 lightImage={game}       
 disabled={arrayOfTerms.length === 4 ?true : false}
 />

  </View>

  <View style={styles.flexNo}>
  <NewsButton
     title="Bar"
   disabled={arrayOfTerms.length === 4 ?true : false}
 onPressFunction={() => toggleTerm('bar')}

 lightImage={bar}       />

  </View>

  



</View>


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
      // marginTop: 5,
      // paddingTop: 20,
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
  },
  centeredView: {
    // flex: 1,
    flexDirection: "row",

    backgroundColor: "#fff",

    alignSelf: "center",
    //   position: 'relative',
    marginTop: 25,
  },
  direction: {
    flex: 1,
    flexDirection: 'row'
},
flexNo: {
    flex: 4,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    // marginTop: 20,
    height: 120
}
 
 
});
