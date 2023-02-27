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



export const TopBar = (props) => {
 const [flag, setFlag] = useState("");

 const logo = require('../assets/spash.png');
 const search = require('../assets/Vector.png');
  return (

    <View style={{backgroundColor: 'white'}}>
           
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:10}}>
                    <Image source={logo} style={{width: 200, height: 60}} />

                    </View>
                    <View style={{flex:2}}>
                    <Image source={search} style={{marginTop: 20, marginLeft: 15}}/>
                    </View>
                </View>
            </View>

  );
};