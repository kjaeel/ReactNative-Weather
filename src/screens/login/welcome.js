/* eslint-disable react-native/no-inline-styles */
/**
 * Screen for handling the navigation flow of the what where why questions.
 * Quite unique design on this one, and it'll all be in one 'screen'
 */

 import React, {useContext, useEffect, useState, useRef} from 'react';
 import {
   View,
   Dimensions,
   StyleSheet,
   Text,
   ImageBackground,
   TouchableOpacityBase,
   TouchableOpacity,
   Animated,Image
 } from 'react-native';
 
 import {
   heightPercentageToDP,
   widthPercentageToDP,
 } from 'react-native-responsive-screen';

 import FastImage from 'react-native-fast-image';

 import { UserContext } from '../../context';
 
 const {width, height} = Dimensions.get('window');
 
 export const Welcome = ({ navigation}) => {
   const {user, setUser, setTutorial} = React.useContext(UserContext);
   const [loader, setLoader] = useState(false);
   const [pageIndex, setPageIndex] = useState(1);
   const next = require('../../assets/next.png');
   const started = require('../../assets/Started.png');
 
   const goHome = () => {
 // setLoader(true)
  // setTutorial(false);
  navigation.navigate("RegisterEditProfile");
   }
 
 
   const imageOne = () => {
    return (
      <View                 // Special animatable View

  > 
      <ImageBackground
       //  resizeMode="contain"
        style={{
          width: 382,
          height: 693,
          justifyContent: 'center',
          alignContent: 'center',
           alignItems: 'center',
           alignSelf: 'center',
           marginTop: 30
          // opacity: 0.9,
        }}
        
        source={require('../../assets/welcome1.png')}>
       
   
      </ImageBackground>
      </View>
    );
  };

  const imageTwo = () => {
    return (
      <View                 // Special animatable View

  > 
      <ImageBackground
       //  resizeMode="contain"
        style={{
          width: 341,
          height: 661,
          justifyContent: 'center',
          alignContent: 'center',
           alignItems: 'center',
           alignSelf: 'center',
           marginTop: 30
          // opacity: 0.9,
        }}
        
        source={require('../../assets/welcome2.png')}>
       
   
      </ImageBackground>
      </View>
    );
  };

  const imageThree = () => {
    return (
      <View                 // Special animatable View

  > 
      <ImageBackground
       //  resizeMode="contain"
        style={{
          width: 382,
          height: 693,
          justifyContent: 'center',
          alignContent: 'center',
           alignItems: 'center',
           alignSelf: 'center',
           marginTop: 30
          // opacity: 0.9,
        }}
        
        source={require('../../assets/welcome3.png')}>
       
   
      </ImageBackground>
      </View>
    );
  };
 
 
 
   return (
    <View style={{flex: 1, backgroundColor: '#F7FBFE'}}>


    <View   
      style={{
        position: 'absolute',
        left: '10%',
        bottom: 20,
        flex: 1,
        flexDirection: 'row',
        zIndex: 10,
      }}>

        {pageIndex === 3? (<View style={{ flex: 1,   marginLeft: '24%',   bottom: 20,   }}>
          <TouchableOpacity onPress={()=> navigation.navigate('CreateNewAcc')}>
            <Image source={started}  />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => [setPageIndex(pageIndex - 1)]}>
                               <Text>ssssssssssss</Text>
                           </TouchableOpacity> */}

            </View> ):

      <><View style={{ flex: 4 }}>
                       <TouchableOpacity
                           //   onPress={() => navigation.navigate("RegisterEditProfile")}
                           style={{ marginLeft: 30, marginTop: 5 }}
                       >
                           <Text
                               style={{
                                   color: '#0065ff',
                                   fontFamily: 'Roboto-Bold',
                                   fontSize: 22,
                               }}>
                               Skip
                           </Text>
                       </TouchableOpacity>
                   </View><View style={{ flex: 3 }}></View><View style={{ flex: 5, }}>

{/* 
                           <TouchableOpacity onPress={() => [setPageIndex(pageIndex - 1)]}>
                               <Text>ssssssssssss</Text>
                           </TouchableOpacity> */}


                           <TouchableOpacity onPress={() => [setPageIndex(pageIndex + 1)]}>
                               <Image source={next} style={{ width: 117, height: 47 }} />
                           </TouchableOpacity>
                       </View></>
 }
    </View>
    {pageIndex === 1 && imageOne()}

    {pageIndex === 2 && imageTwo()}

    {pageIndex === 3 && imageThree()}    
{/* 

    {pageIndex === 2 && imageTwo()}

    {pageIndex === 3 && imageFour()}
 
    {pageIndex === 4 && goHome()} */}
    
    {/* </Animated.View> */}
  </View>
   );
 };
 
 const styles = StyleSheet.create({
   pictures: {
     height: 62,
     width: 62,
     borderRadius: 30,
     marginBottom: 5,
   },
   input: {
     height: 40,
     marginLeft: 40,
     marginRight: 40,
     marginTop: 12,
     borderWidth: 1,
     padding: 10,
     backgroundColor: 'white',
     borderColor: 'white',
     color: '#000',
     fontSize: 16,
   },
 });
 