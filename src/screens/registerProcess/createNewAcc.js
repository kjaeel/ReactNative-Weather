import {
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    ScrollView,
    ImageBackground,
    Alert,
    Image,
    Switch,
    Platform,
    StyleSheet,
    RefreshControl,
    Modal,
    TextInput,
    Pressable,
  } from "react-native";
  import React, { useState, useCallback, useEffect, useRef } from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
  
  const { width, height } = Dimensions.get("window");
  
  export const CreateNewAcc = ({ route, navigation }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const registerBg = require("../../assets/registerBg.png");
    const law = require("../../assets/law.png");
    const lawyer = require("../../assets/lawyer.png");
    const explore = require("../../assets/explore.png");
    const next = require('../../assets/next.png');

    const [flag, setFlag] = useState('');

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          height: windowHeight,
          width: windowWidth,
         
        }}
      >
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
  
      
  
        <View style={styles.centeredView}>
          <View>
            <Text style={styles.createText}>
              Create a New {"\n"}
              Account
            </Text>
          </View>
        </View>
  
        <View style={styles.centeredView1}>
          <TouchableOpacity onPress={() =>  navigation.navigate('RegisterStudent')}>
            {/* <View style={{width: width}}> */}
            <Image source={law} style={{width: 344, height: 90}}/>
            {/* </View> */}
          </TouchableOpacity>
        </View>
  
        <View style={styles.centeredView1}>
        <TouchableOpacity onPress={() =>  navigation.navigate('RegisterLawyer')}>
            <Image source={lawyer} style={{width: 344, height: 90}}/>
          </TouchableOpacity>
        </View>
  
        <View style={styles.centeredView1}>
        <TouchableOpacity onPress={() =>  navigation.navigate('RegisterExplore')}>
            <Image source={explore} style={{width: 344, height: 90}}/>
          </TouchableOpacity>
        </View>

      
        <View style={styles.centeredView2}>
          {/* <TouchableOpacity>
          <Image source={next} style={{ width: 117, height: 47 }} />
          </TouchableOpacity> */}
          
        </View>



        <View style={styles.centeredView3}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Text style={styles.goback}>Go Back</Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      // flex: 1,
      flexDirection: "row",
  
      backgroundColor: "#fff",
  
      alignSelf: "center",
      //   position: 'relative',
      marginTop: heightPercentageToDP('15'),
    },
    centeredView1: {
      // flex: 1,
      flexDirection: "row",
  
      backgroundColor: "#fff",
  
      alignSelf: "center",
      //   position: 'relative',
      marginTop: 40,
    },
    centeredView2: {
        // flex: 1,
        flexDirection: "row",
    
        backgroundColor: "#fff",
    
        alignSelf: "center",
        //   position: 'relative',
        marginTop: 100,
      },
      centeredView3: {
        // flex: 1,
        flexDirection: "row",
    
        backgroundColor: "#fff",
    
        alignSelf: "center",
        //   position: 'relative',
        marginTop: 20,
        marginBottom: 50
      },
    createText: {
      color: "#024092",
      fontSize: 40,
      fontFamily: "Roboto-Medium",
      textAlign: "center",
    },
    goback : {
        color: '#024092',
        fontSize: 18,
        fontFamily: 'Roboto-Medium'
    }
  });
  