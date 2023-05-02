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
  Pressable,
} from 'react-native';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import CheckBox from '../../components/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export const AirLogin = ({ route, navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const registerBg = require('../../assets/registerBg2.png');
  const logo = require('../../assets/logo2.png');
  const lawyer = require('../../assets/lawyer.png');
  const explore = require('../../assets/explore.png');
  const next = require('../../assets/next.png');
  const [hidePassword, sethidePassword] = useState(true);
  const [checkBox, setCheckBox] = useState('unchecked');
  const back = require('../../assets/back.png');
  const [flag, setFlag] = useState('');

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        // height: windowHeight,
        width: windowWidth,
      }}>
      <ImageBackground
        source={registerBg}
        resizeMode="stretch"
        style={{
          height: height,
          position: 'absolute',
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
            style={{
              marginLeft: 0, marginTop: 25, marginRight: 0,
            }}
          >
            <Ionicons name="chevron-back" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8 }}>
          {/* <Image source={logo} style={{width: 160, height: 60, marginLeft: -5, marginTop: 8}} /> */}
          <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: 'white', marginTop: 24 }}>
            Login
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {/* <TouchableOpacity
          onPress={() => props.onPressDots()}
        style={{ marginTop: 0, marginRight: 0 }}
      >
           <Image source={search} style={{marginTop: 20, marginLeft: 15}}/>
      </TouchableOpacity>  */}

        </View>
      </View>

      <View style={styles.centeredView}>
        <View>
          {/* <Text style={styles.createText}>
              Create a New {"\n"}
              Account
            </Text> */}
        </View>
      </View>

      <View style={styles.centeredView1}>
        <Image source={logo} />
      </View>

      <View style={styles.centeredView1}>
        <Text style={styles.signIntext}>Sign in to access online library</Text>
      </View>

      <View style={styles.centeredView1}>
        <TextInput
          style={styles.input}
          autoFocus={false}
          placeholder=" Email Address"
          autoCapitalize="none"
        // placeholderTextColor="grey"
        // onChangeText={props.handleChange('email')}
        // value={props.values.email}
        // onBlur={props.handleBlur('email')}
        />
        <Text style={styles.errorText}>
          {' '}
          {/* {props.touched.email && props.errors.email} */}
        </Text>
        {/* <Text >{keyboardStatus}</Text> */}
      </View>

      <View style={styles.centeredView2}>
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry={hidePassword === true ? true : false}
          right={
            hidePassword === false ? (
              <TextInput.Icon
                icon={'eye'}
                iconColor="#9B9EA8"
                // style={styles.leftIcon as StyleProp<ViewStyle>}
                size={30}
                onPress={() =>
                  hidePassword === true
                    ? sethidePassword(false)
                    : sethidePassword(true)
                }
              />
            ) : (
              <TextInput.Icon
                icon={'eye-off'}
                iconColor="#9B9EA8"
                // style={styles.leftIcon as StyleProp<ViewStyle>}
                size={30}
                onPress={() =>
                  hidePassword === true
                    ? sethidePassword(false)
                    : sethidePassword(true)
                }
              />
            )
          }
        />
      </View>

      <View style={styles.centeredView6}>
        <CheckBox
          label="Remember me"
          status={checkBox}
          onPress={() =>
            checkBox === 'checked'
              ? setCheckBox('unchecked')
              : setCheckBox('checked')
          }
        />
      </View>

      <View style={styles.centeredView3}>
        <TouchableOpacity
          onPress={() => {
            // setUser(airLiveUser)
            logInWithData();
          }}
          style={{
            backgroundColor: '#FF9100',
            height: 51,
            width: widthPercentageToDP('80'),
            //alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            top: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'Roboto',
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView4}>
        <TouchableOpacity
          onPress={() => {
            // setUser(airLiveUser)
            // logInWithData();
          }}
          style={{
            // backgroundColor: '#FF9100',
            height: 51,
            width: 400,
            //alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            // top: 30
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: '#FF9100',
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'Roboto',
              }}>
              Forgot password?
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView5}>
        <TouchableOpacity
          onPress={() => {
            // setUser(airLiveUser)
            // logInWithData();
          }}
          style={{
            // backgroundColor: '#FF9100',
            height: 51,
            width: 400,
            //alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            // top: 30
            marginBottom: 30
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: '#FF9100',
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'Roboto',
              }}>
              Create New Acc
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    marginTop: heightPercentageToDP('10'),
  },
  centeredView1: {
    // flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    marginTop: 40,
  },
  centeredView2: {
    // flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    marginTop: 30,
    // marginBottom: 40,
  },
  centeredView4: {
    // flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    marginTop: 30,
    // marginBottom: 40,
  },

  centeredView5: {
    // flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    //   marginTop: 30,
    // marginBottom: 40,
  },
  centeredView3: {
    // flex: 1,
    // flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'center',
    //   position: 'relative',
    marginTop: 40,
    // marginBottom: 50,
    marginLeft: 5,
  },
  centeredView6: {
    // flex: 1,
    // flexDirection: 'row',

    backgroundColor: '#fff',

    alignSelf: 'flex-start',
    //   position: 'relative',
    marginTop: 40,
    // marginBottom: 50,
    marginLeft: 35,
  },
  createText: {
    color: '#024092',
    fontSize: 40,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  goback: {
    color: '#024092',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },

  signIntext: {
    fontFamily: 'Roboto-SemiBold',
    fontSize: 16,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 0.8,
    backgroundColor: '#F7FBFE',
    // borderWidth: 0.5,
    // borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Roboto-SemiBold',
  },
});
