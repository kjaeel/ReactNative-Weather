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
  
  const { width, height } = Dimensions.get("window");
  
  export const Personalization = ({ route, navigation }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const registerBg = require("../../assets/registerBg.png");
    const law = require("../../assets/law.png");
    const lawyer = require("../../assets/lawyer.png");
    const explore = require("../../assets/explore.png");
    const next = require('../../assets/next.png');
    const back = require('../../assets/backwhite.png');
    const [flag, setFlag] = useState('');
    const [flag1, setFlag1] = useState('');
    const heart = require("../../assets/Heart.png");

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
          source={registerBg}
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
  
      
    <View style={{ flexDirection: "row", margin: 24 }}>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
        style={{marginLeft: 0, marginTop: 22, marginRight: 0, 
 }}
      >
        <Image source={back} style={{width: 11, height: 20}}/>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 8 , alignItems: 'center'}}>
    {/* <Image source={logo} style={{width: 200, height: 60, marginLeft: -30, marginTop: 2}} />
     */}
     <Text style={{textAlign: 'center', color: 'white', fontFamily: 'Roboto-Bold', fontSize: 25, marginTop: 13}}>News Categories</Text>
    </View>
    <View style={{ flex: 1 , alignItems: 'center'}}>
      <TouchableOpacity
        //   onPress={() => props.onPressDots()}
        style={{ marginTop: 0, marginRight: 0 }}
      >
          <Text style={{textAlign: 'center', color: 'white', fontFamily: 'Roboto-Regular', fontSize: 20, marginTop: 18}}>Skip</Text>
      </TouchableOpacity> 
     
    </View>
  </View>
        <View style={styles.centeredView}>
          <View style={styles.direction}>

            <View style={styles.flexNo}>
                <TouchableOpacity onPress={()=> {
                     setFlag(false), setFlag1(false)
                }}>
                    <View style={{flexDirection: 'row'}}>

                        <View>
                            <Text>
                               Corporate
                            </Text>
                        </View>
                        <View>
                        <Image source={heart}  />
                        </View>

                    </View>
                    
                </TouchableOpacity>

            </View>

            <View style={styles.flexNo}>
                <TouchableOpacity>
                <Text>
                flexNo
                </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.flexNo}>
                <TouchableOpacity>
                <Text>
                flexNo
                </Text>
                </TouchableOpacity>

            </View>


         
          </View>
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
    },
    direction: {
        flex: 1,
        flexDirection: 'row'
    },
    flexNo: {
        flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
  });
  