/* eslint-disable react-native/no-inline-styles */
/*
 * Login page that allows user to login using email and password or a social provider
 */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  // TextInput,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../context';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginWithEmail} from '../../services/auth';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const Login = ({route, navigation}) => {
  const [topMessage, setTopMessage] = useState('');
  const logo = require('../../assets/spash.png');
  const {user, setUser} = React.useContext(UserContext);
  const {submitting, setSubmitting} = useState();
  const [hidePassword, sethidePassword] = useState(true);
  const visibility = require('../../assets/loginIcons/visibility.png');

  const infotech = require('../../assets/airinfotech.png');

  const airLiveUser = {
    uid: '1234',
  };

  const element = <TextInput.Icon name="lock-outline" />

  const logInWithData = async () => {
    //  let data = loginWithEmail()

    await loginWithEmail().then(
      // await getFlights('LAS', 'FLL', '2022-01-18', adultCount, childCount).then(
      data => {
        //  console.log("DATA - - - - - - - -",data)

        if (data.Errors) {
          // finalData.push("Error");
          console.log('here in error');
        } else {
          setUser(data);
          // console.log(JSON.stringify(data, null, 2));
          // console.log("here")
        }
      },
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', paddingBottom: 100}}>
      {/* <Image source={logo} /> */}

      {/* <TouchableOpacity onPress={()=>  setUser(airLiveUser)} style={{backgroundColor: 'black'}}>
      <Text>
        login
      </Text>
     </TouchableOpacity> */}

      <View style={styles.centered}>
        <Image source={logo} />

        <Text style={styles.logInText}>Log In Now</Text>

        <Text style={styles.logInText1}>Please fill the details to Login</Text>
      </View>
      <View>
        <View>
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


                  




          <TextInput
           style={styles.input}
      label="Password"
      secureTextEntry= {hidePassword === true ? true : false}
      right={  
      hidePassword === false ?
      
      <TextInput.Icon
        icon={'eye'}
        iconColor="#9B9EA8"
        // style={styles.leftIcon as StyleProp<ViewStyle>}
        size={30}
        onPress={() => hidePassword === true ?    sethidePassword(false) : sethidePassword(true)}
        />
      :
      <TextInput.Icon
      icon={'eye-off'}
      iconColor="#9B9EA8"
      // style={styles.leftIcon as StyleProp<ViewStyle>}
      size={30}
      onPress={() => hidePassword === true ?    sethidePassword(false) : sethidePassword(true)}
      />
      }
    />
                  






          <Text style={styles.errorText}>
            {' '}
            {/* {props.touched.password && props.errors.password} */}
          </Text>

          <View style={{alignItems: 'flex-end', right: 40}}>
            <Pressable
              //onPress={() => navigation.navigate('ForgotPassword')}
              onPress={() => console.log('pressed')}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#404040',
                  fontFamily: 'Roboto-SemiBold',
                  fontWeight: '500',
                }}>
                Forgot your password?{' '}
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              // setUser(airLiveUser)
              logInWithData();
            }}
            style={{
              backgroundColor: '#2D4191',
              height: 51,
              width: widthPercentageToDP('80'),
              //alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
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
                Login In Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            bottom: -50,
            marginBottom: 150,
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Welcome')}
            style={{padding: 10,}}>
            <Text
              style={{
                fontSize: 14,
                color: '#404040',
                fontWeight: '600',
                fontFamily: 'Roboto-SemiBold',
              }}>
              If you don’t have account?{' '}
              <Text
                style={{
                  fontSize: 14,
                  color: '#2D4191',
                  // fontWeight: '600',
                  fontFamily: 'Roboto-Bold',
                }}>
                Sign Up{' '}
              </Text>
            </Text>
          </Pressable>
        </View>


        <View style={{ alignSelf: 'center', alignItems: 'center', marginBottom: 20, marginTop: -50}}>
          <TouchableOpacity   onPress={() => {
           navigation.navigate('AirLogin')
            }}>
          <Image source={infotech} style={{width: 160, height: 60}}/>
          </TouchableOpacity>
        </View>

        <View />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
  logInText: {
    fontSize: 24,
    color: '#2D4191',
    fontFamily: 'Roboto-Bold',
    marginTop: 35,
  },
  logInText1: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    // fontWeight: 'bold'
  },
  headText: {
    fontSize: 32,
    marginBottom: 20,
    //fontWeight: 'bold',
  },
  subheadText: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 10,
  },
  socialText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 0,
    // marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  buttonPress: {
    backgroundColor: 'white',
    height: 53,
    width: 340,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
    borderColor: '#E4E8E9',
    borderWidth: 1,
  },
  input: {
    // width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 0.8,
    backgroundColor: '#F7FBFE',
    // borderWidth: 0.5,
    // borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Roboto-SemiBold',
    //fontWeight: '500',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    // paddingBottom: 1,
    paddingLeft: 15,
  },

  secondaryLogin: {
    backgroundColor: 'blue',
    width: 100,
    height: 30,
    marginLeft: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHeader: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
  login: {
    fontSize: 22,
    paddingLeft: 5,
  },
  errorText: {
    color: 'red',
    fontWeight: 'normal',
    fontFamily: 'Roboto-Regular',
  },
});
