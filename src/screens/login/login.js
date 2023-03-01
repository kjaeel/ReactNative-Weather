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
 Image, TextInput,Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {UserContext} from '../../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginWithEmail } from '../../services/auth';

export const Login = ({route, navigation}) => {
 
  const [topMessage, setTopMessage] = useState('');
  const logo = require('../../assets/spash.png');
  const {user, setUser} = React.useContext(UserContext);
  const {submitting, setSubmitting} = useState();


  const airLiveUser = {
    uid: '1234',
    
  };

  const logInWithData = async () => {
  //  let data = loginWithEmail()

   await loginWithEmail().then(
      
    // await getFlights('LAS', 'FLL', '2022-01-18', adultCount, childCount).then(
    data => {


    

    //  console.log("DATA - - - - - - - -",data)

     if (data.Errors ) {

      // finalData.push("Error");
      console.log("here in error")
       
     } else {
      setUser(data)
   console.log(JSON.stringify(data, null,2))
      // console.log("here")
     }





     
    },
  );

  }

  




  return (
 <ScrollView style={{backgroundColor: '#fff',paddingBottom: 100 }}>
     {/* <Image source={logo} /> */}

     {/* <TouchableOpacity onPress={()=>  setUser(airLiveUser)} style={{backgroundColor: 'black'}}>
      <Text>
        login
      </Text>
     </TouchableOpacity> */}

<View   style={styles.centered}>
          <Image
            source={logo}
          
          />

<Text style={styles.logInText}>Log In Now</Text> 

          <Text style={styles.logInText1}>Please fill the details to Login</Text>
        </View>
        <View>
              <View >
                <TextInput
                  style={styles.input}
                  autoFocus={false}
                  placeholder=" Email"
                  autoCapitalize="none"
                  placeholderTextColor="grey"
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
                  placeholder=" Password"
                  // secureTextEntry={hidePassword ? true : false}
                  autoCapitalize="none"
                  placeholderTextColor="grey"
                  // onChangeText={props.handleChange('password')}
                  // value={props.values.password}
                  // onBlur={props.handleBlur('password')}
                />
                <TouchableOpacity
                  onPress={() => sethidePassword(!hidePassword)}>
                  {/* <Image
                    source={visibility}
                    style={{height: 25, width: '8%', left: 290, top: -37}}
                  /> */}
                </TouchableOpacity>
                <Text style={styles.errorText}>
                  {' '}
                  {/* {props.touched.password && props.errors.password} */}
                </Text>

                <View style={{alignItems: 'flex-end',right: 40}}>
                  <Pressable
                    //onPress={() => navigation.navigate('ForgotPassword')}
                    onPress={() => console.log("pressed")}
                    >
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#0065FF',
                        fontFamily: 'Roboto-Regular',
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
                    logInWithData()
                  }}
                
                  style={{
                    backgroundColor: '#0065FF',
                    height: 56,
                    width: 340,
                    //alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 17,
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
         
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: -50,
                  marginBottom: 150,
                  flexDirection: 'row',

                }}>
                <Pressable onPress={() => navigation.navigate('Welcome')} style={{padding: 10,}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#0065FF',
                      fontWeight: '600',
                      fontFamily: 'Roboto-Regular',
                    }}>
                    Don't have an account? {' '} 
                    <Text>Create account </Text>
                  </Text>  
                </Pressable>
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
  marginTop: 50
  },
  logInText:{
fontSize: 25,
color: '#024092',
fontWeight: 'bold'
  },
  logInText1:{
    fontSize: 15,
    color: '#000',
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
    color: 'black'
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
    borderColor: 'white',
    backgroundColor: '#F7FBFE',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 18,
    borderColor: 'black',
    //fontWeight: '500',
   marginTop: 20,
   marginLeft: 20,
   marginRight: 20,
    paddingBottom: 1,
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
