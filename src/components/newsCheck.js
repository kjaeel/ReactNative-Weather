/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";


export const NewsButton = ({
  title,
  onPressFunction,
  lightImage,
  darkImage,
  disabled
}) => {
  const [selected, setSelected] = useState(false);
  let selectedColor;
  let textColor;

//   const whiteTick = require('../../assets/whiteTick/whiteTick.png');

  if (selected) {
    selectedColor = '#0065FF';
    textColor = 'white';
  } else {
    selectedColor = '#F7FBFE';
    textColor = 'black';
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSelected(!selected);
          onPressFunction();
        }}
        disabled = {disabled}
        style={{
        //   backgroundColor: selectedColor,
          opacity: 1,
          // height: 55,
          // width: 'auto',
          justifyContent: 'center',
          // borderRadius: 100,
          left: 0,
          // marginTop: 10,
          // margin: 5,
        }}

     
        
        >
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            
          }}>
       
        

          <Text
            style={{
              color: '#1E1E1E',
              // fontWeight: '500',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              // marginRight: 12,
               aligntext: 'flex-start'
            }}>
            {title}
          </Text>

      <View style={{position: 'absolute', right: 1}}>
          {selected ? (
       <Icon name="heart" size={17} color={'#FF3939'} style={{marginLeft: 0, marginTop: 0}}/>
     

          ) : (
          
            <Icon name="heart-outlined" size={17} color={'#1E1E1E'} style={{marginLeft:0, marginTop: 0}}/>
          )}
          </View>

        </View>
      
           <Image
           style={{marginRight: 0,}}
      
           source={lightImage} 
         />

{disabled ===true ?<View style={styles.overlay}/>: <View/> }

        
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.2,
    backgroundColor: "rgba(0, 0, 0,0.1)",
    height: '100%',
    width: '90%',
    // borderRadius: 30,
  },
});