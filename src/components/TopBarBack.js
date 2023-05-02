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
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

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

    <View style={{ flexDirection: "row", marginBottom: 5}}>
      <View  style={{ flex: 6 }}>
        <TouchableOpacity
          onPress={() => props.onPressFunc()}
          style={{
            marginLeft: 24, marginTop: 12, marginRight: 0, backgroundColor: 'white',
          }}
        >
          {/* <Image source={back}  /> */}

          <MaterialIcons name="arrow-back-ios" size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
      <View style={{ flexDirection: "row", marginTop: 16, marginBottom: 10, marginRight: 10 }}>



<TouchableOpacity>
  <Feather name="bookmark" size={25} color={'#000'} style={{ marginLeft: 20 }} />
</TouchableOpacity>

<TouchableOpacity>
  <Feather name="share-2" size={25} color={'#000'} style={{ marginLeft: 20 }} />
</TouchableOpacity>

</View>
      </View>
      <View style={{ flex: 3 }}>
      
<TouchableOpacity 
onPress={()=> props.onPressTrial()}
style={{backgroundColor: '#FF1A1A',  borderRadius: 5,  width: 94, height: 27, alignItems: 'center', alignSelf: 'center', alignContent: 'center', marginTop: widthPercentageToDP('3')}}>
  <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 16, textAlign: 'center', textAlignVertical: 'center', alignItems: 'center', marginTop: 2}}>
    Free Trial
  </Text>
</TouchableOpacity>

      </View>
    </View>

  );
};
