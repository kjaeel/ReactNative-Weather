/**
 * Screen for handling the navigation flow of the what where why questions.
 * Quite unique design on this one, and it'll all be in one 'screen'
 */
import React, { useState, onSelect, setState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";


export const AdBanner = (props,) => {
 const [flag, setFlag] = useState("");

 const ad = require('../assets/ad.png');
 const search = require('../assets/Vector.png');

  return (

                     <View >
            
          
             
                    <Image source={ad} style={{  marginTop: 3}}/>
                
              
                 </View>

  );
};
