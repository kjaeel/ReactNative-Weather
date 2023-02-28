/*
 * Group Chat component
 * Given groupID and some basic details, auto listens for updates
 */


import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';



export const NewsCard = (props,flag) => {
console.log("- - - - - - - - - -",props)

  

  
  return (
    <View style={styles.container}>
       <View style={{margin: 1, flex: 3}}>
          <Image style={styles.pictures2} 
          source={{uri: props.photoUrl}} 
          
          />
          {/* <View style={[styles.overlay]} /> */}
       
        </View>

        <View style={{flex: 8}}>

        <Text
        numberOfLines={3}
            style={[
              styles.textStyle1,
              {textAlign: 'left', paddingRight: 10,},
            ]}>
      

      {props.message}
          </Text>

          <Text numberOfLines={1} style={{fontFamily: 'Roboto-Medium', fontSize: 9, position: 'absolute', bottom: 2}}>
          {props.time}
          
          </Text>

        </View>

{props.flag === 'news' ?   <View style={{flex: 1}}>
        <Image source={require('../assets/saved.png')} style={{position: 'absolute', top: heightPercentageToDP('-4.5')}} />
        </View>

: 
<View style={{flex: 1}}>
<Image source={require('../assets/notifications.png')} style={{position: 'absolute', top: heightPercentageToDP('-4.5')}} />
</View>
}
      


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // width: 328,
    // height: 90,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    // marginLeft: 24,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  redbox: {
    flexDirection: 'row',
    margin: 12,

    flex: 1,
  },
  bluebox: {
    flex: 5,
  },
  pictures1: {
    borderRadius: 4,
  },
  pictures2: {
    height: 65,
    width: 65,
    borderRadius: 5,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    flex: 1,
  },
  textStyle1: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#000',
    flex: 1,
  },
  lastMsg: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: '#000',
  },
  numberStyle: {
    borderRadius: 4,
    marginTop: 2,
    width: 19,
    height: 19,
    backgroundColor: '#F7FBFE',
  },
  numberText: {
    color: '#1F64E5',
    marginTop: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.3,
    backgroundColor: 'black',
    height: 56,
    width: 56,
    borderRadius: 30,
  },
});
