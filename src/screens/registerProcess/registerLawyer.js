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
  import Avatar, { IconTypes, Sizes } from "rn-avatar";
  
  const { width, height } = Dimensions.get("window");
  
  export const RegisterLawyer = ({ route, navigation }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const registerBg = require("../../assets/registerBg.png");
    const law = require("../../assets/law.png");
    const lawyer = require("../../assets/lawyer.png");
    const explore = require("../../assets/explore.png");
    const next = require("../../assets/next.png");

    const lawman = require("../../assets/lawyerScreen.png");

    const [firstName, setFistName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [profession, setProfession] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [hidePassword2, sethidePassword2] = useState(true);
    // const [firstName, setFistName] = React.useState("");
    const [flag, setFlag] = useState("");
    
  const visibility = require('../../assets/visibility.png');
  
    const ref_input2 = useRef();
    const ref_input3 = useRef();
  
    const ref_input4 = useRef();
    const ref_input5 = useRef();
  
    const ref_input6 = useRef();
    const ref_input7 = useRef();
    const ref_input8 = useRef();
  
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#F7FBFE",
          height: windowHeight,
          width: windowWidth,
        }}
      >
        <ImageBackground
          source={lawman}
          resizeMode="cover"
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
            <Text style={styles.createText}>Already registered?</Text>
            <TouchableOpacity>
              <Text style={styles.createText1}>Log in here</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
          Full Name
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setFistName}
            value={firstName}
            placeholder={"Your Name Here"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input2.current.focus()}
          />
        </View>


        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
           Email Address
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            ref={ref_input2}
            onChangeText={setEmail}
            value={email}
            placeholder={"abcd@gmail.com"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input3.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
          Phone Number
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            ref={ref_input3}
            placeholder={"9876543210"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input4.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
            Lawyer Profession
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setProfession}
            ref={ref_input4}
            value={profession}
            placeholder={"  Lawyer Profession"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input5.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
           Years of Experience
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setExperience}
            value={experience}
            ref={ref_input5}
            placeholder={"No. Of years"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input6.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
           Current City
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setCity}
            value={city}
            ref={ref_input6}
            placeholder={"Current City Name"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input7.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
            State
          </Text>
        </View>
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setState}
            value={state}
            placeholder={"State"}
            placeholderTextColor={"#767E8B"}
            ref={ref_input7}
            onSubmitEditing={() => ref_input8.current.focus()}
          />
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
            Password
          </Text>
        </View>
  
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 11}}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={hidePassword2 ? true : false}
            placeholder={"Password"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input2.current.focus()}
          />
          </View>
          
          <View style={{flex: 1, position: 'absolute', right: 50, top: 20}}>
            <TouchableOpacity
                    onPress={() => sethidePassword2(!hidePassword2)}>
                    <Image
                      source={visibility}
                      style={{height: 25,}}
                    />
                  </TouchableOpacity>
                  </View>
        </View>

        <View style={styles.formName}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              color: "black",
            }}
          >
          Confirm Password
          </Text>
        </View>
  
        <View >
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={ true }
            placeholder={"Password"}
            placeholderTextColor={"#767E8B"}
            onSubmitEditing={() => ref_input2.current.focus()}
          />
            
        </View>
    

        <View style={styles.centeredView2}>
          <TouchableOpacity>
            <Image source={next} style={{ width: 117, height: 47 }} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.centeredView3}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goback}>Go Back</Text>
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
      marginTop: 220,
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
      marginTop: 80,
    },
    centeredView3: {
      // flex: 1,
      flexDirection: "row",
  
      backgroundColor: "#fff",
  
      alignSelf: "center",
      //   position: 'relative',
      marginTop: 20,
      marginBottom: 40
    },
    createText: {
      color: "#000",
      fontSize: 20,
      fontFamily: "Roboto-Regular",
      textAlign: "center",
      marginTop: 30,
    },
    goback: {
      color: "#024092",
      fontSize: 18,
      fontFamily: "Roboto-Medium",
    },
    createText1: {
      color: "#024092",
      fontSize: 20,
      fontFamily: "Roboto-Medium",
      textAlign: "center",
    },
    input: {
      height: 40,
      marginLeft: 30,
      marginRight: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
      paddingLeft: 60,
      backgroundColor: "#ECF0FF",
      borderColor: "white",
      color: "#000",
      fontSize: 16,
    },
  
    formName: {
      marginLeft: 30,
      marginTop: 30,
    },
  });
  