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
import { widthPercentageToDP } from "react-native-responsive-screen";



export const TopBarBack = (props) => {
 const [flag, setFlag] = useState("");

 const logo = require('../assets/splash2.png');
 const search = require('../assets/Vector.png');
 const back = require('../assets/back.png');
  return (

    // <View style={{backgroundColor: 'white'}}>
           
    //             <View style={{flexDirection:"row"}}>
    //             <View style={{flex:2, }}>
    //                 <Image source={back} style={{marginTop: 25, marginLeft: 35, }}/>
    //                 </View>
    //                 <View style={{flex:8}}>
    //                 <Image source={logo} style={{width: 200, height: 60, marginLeft: -40, marginTop: 2}} />

    //                 </View>
    //                 <View style={{flex:2}}>
    //                 <Image source={search} style={{marginTop: 20, marginLeft: 15}}/>
    //                 </View>
    //             </View>
    //         </View>

    <View style={{ flexDirection: "row", margin: 24 }}>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
       onPress={() => props.onPressFunc()}
        style={{marginLeft: 0, marginTop: 25, marginRight: 0, backgroundColor: 'white', 
 }}
      >
        <Image source={back}  />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 8 }}>
    <Image source={logo} style={{width: 160, height: 60, marginLeft: -5, marginTop: 8}} />
    </View>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
          onPress={() => props.onPressDots()}
        style={{ marginTop: 0, marginRight: 0 }}
      >
           <Image source={search} style={{marginTop: 20, marginLeft: 15}}/>
      </TouchableOpacity> 
     
    </View>
  </View>

  );
};
