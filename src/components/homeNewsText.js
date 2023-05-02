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


export const HomeNewsText = (props,) => {
 const [flag, setFlag] = useState("");

 const logo = require('../assets/news.png');
 const search = require('../assets/Vector.png');

  return (

    <View style={{backgroundColor: 'white'}}>
            
                <View style={{flexDirection:"row", marginBottom: 10}}>
                <View style={{flex:3, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                    <Image source={logo} style={{   marginTop: 3, marginRight: 6}}/>
                    </View>
                    <View style={{flex:9, marginLeft: 6,}}>
                      <TouchableOpacity onPress={() => props.onPressNavigateFunc()}>
                    <Text style={{  fontSize: 16,  fontFamily: 'Roboto-Medium' }}  numberOfLines={2}>
                   {props.text}
                    </Text>
                    </TouchableOpacity>

                        <View style={{flexDirection:"row", marginTop: 5}}>
                        <Text style={{color: '#1E1E1E80', fontFamily: 'Roboto-Medium', fontSize: 10, }}>
                      2 min read | 7 minutes age
                      </Text>


                          <TouchableOpacity>
                     <Feather name="bookmark" size={15} color={'#000'} style={{marginLeft: 20}}/>
                      </TouchableOpacity>

                      <TouchableOpacity>
                     <Feather name="share-2" size={15} color={'#000'} style={{marginLeft: 20}} />
                      </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>

  );
};
