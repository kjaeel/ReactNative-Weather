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



export const HomeNewsText = (props) => {
 const [flag, setFlag] = useState("");

 const logo = require('../assets/news.png');
 const search = require('../assets/Vector.png');
  return (

    <View style={{backgroundColor: 'white'}}>
           
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:9, marginLeft: 26, marginTop: 20,}}>
                    <Text style={{  fontSize: 16, width: '97%', fontFamily: 'Roboto-Bold' }} >
                   {props.text}
                    </Text>

                    </View>
                    <View style={{flex:3}}>
                    <Image source={logo} style={{ marginTop: 20, marginLeft: 20}}/>
                    </View>
                </View>
            </View>

  );
};
