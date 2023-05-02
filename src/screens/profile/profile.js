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
import { heightPercentageToDP } from "react-native-responsive-screen";
import Avatar, { IconTypes, Sizes } from "rn-avatar";
import {UserContext} from '../../context';
import Icon from "react-native-vector-icons/Entypo";
  const { width, height } = Dimensions.get("window");
  
  export const Profile = ({ route, navigation }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const registerBg = require("../../assets/registerBg.png");
  
    const career = require('../../assets/profile/globe.png');
    const about = require('../../assets/profile/about.png');
    const location = require('../../assets/profile/location.png');
    const fav = require('../../assets/profile/fav.png');
    const tnc = require('../../assets/profile/tnc.png');
    const privacy = require('../../assets/profile/privacy.png');
    const rate = require('../../assets/profile/rate.png');
    const share = require('../../assets/profile/share.png');
    const logout1 = require('../../assets/profile/logout.png');
    const lang = require('../../assets/profile/lang.png');

    const {user, setUser} = React.useContext(UserContext);

    const [flag, setFlag] = useState('');

    const editProfile = () => {
        navigation.navigate('EditProfile')
       }
      
       const changePass = () => {
        navigation.navigate('ChangePassword')
       }
      
       const changeEmail = () => {
        navigation.navigate('ChangeEmail')
       }
      
       const deleteAcc = () => {
        navigation.navigate('DeleteAccount')
       }
      
       const packageAPI = () => {
        navigation.navigate('PackageDeals');
       }
       
       const createTwoButtonAlert = () =>
       Alert.alert(
         "Confirm Logout",
         "Are you sure you want to logout?",
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK", onPress: () => logout() }
         ]
       );
      
       const logout  = async key => {

    

       
            setUser(null);
            // navigation.navigate('Welcome')
    
        
     }
       
      
        let option1 = {
          array: [
            {
              key: '1',
              func: editProfile,
              image: career,
              name: 'Careers',
            },
            {
              key: '2',
              func: changePass,
              image: about,
              name: 'About Us',
            },
            {
              key: '3',
              func: changeEmail,
              image: location,
              name: 'Location',
            },
      
            {
              key: '4',
              func: deleteAcc,
              image: lang,
              name: 'Language',
            },
            {
                key: '5',
                func: deleteAcc,
                image: fav,
                name: 'Favourites',
              },
              {
                key: '6',
                func: deleteAcc,
                image: tnc,
                name: 'Terms and Conditions',
              },
              {
                key: '7',
                func: deleteAcc,
                image: privacy,
                name: 'Privacy Policy',
              },
              {
                key: '8',
                func: deleteAcc,
                image: rate,
                name: 'Rate This App',
              },
              {
                key: '9',
                func: deleteAcc,
                image: share,
                name: 'Share This App',
              },
              {
                key: '10',
                func: createTwoButtonAlert,
                image: logout1,
                name: 'Logout',
              },
          ],
        };
      
       

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          height: windowHeight,
          width: windowWidth,
          paddingBottom: 200
         
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
        <View style={{ flexDirection: "row", margin: 24 }}>
    <View style={{ flex: 1, marginTop: 5, marginRight: 10 }}>
      {/* <TouchableOpacity
       onPress={() => props.onPressFunc()}
   
      >
        <Icon name="chevron-left" size={33} color={'#fff'} style={{marginLeft: 3, marginTop: 3}}/>
      </TouchableOpacity> */}
    </View>
    <View style={{ flex: 8 }}>
   
        <Text
        style={{
          color: "#fff",
          fontFamily: "Roboto-Bold",
          fontSize: 28,
          marginTop: 2,
          textAlign: 'center'
        }}
        numberOfLines={1}
      >
    My Profile
      </Text>
    
    </View>
    <View style={{ flex: 1 }}>
     
   
      
     
    </View>
  </View>
        
          
            <View style={{ marginTop: 0, marginLeft: 20,marginTop: 10,flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => (navigation.navigate('Profile', {
                  userId: user?.uid,
                }))}>
            
                   <Avatar
               rounded
               showEditButton
               size={115}
               source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
               containerStyle={{ margin: 10 }}
            //    onEditPress={() => chooseFile("photo")}

            //    onPress={() => chooseFile("photo")}
               editButton={{
                 name: "camera",
                 type: IconTypes.Entypo,
               }}
             />
              </TouchableOpacity>

              <View style={{marginLeft: 15,  marginTop: heightPercentageToDP('5')}}>
                <Text style={{fontFamily: 'Roboto-Bold', fontSize: 20, color: '#024092'}}>
                    Vaisakh Pradeep
                </Text>

                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 12, color: '#000'}}>
                vaisakhpradeep110@gmail.com
                </Text>


                <TouchableOpacity style={{backgroundColor: '#024092', padding: 10, alignContent: 'center', alignItems: 'center', marginTop: 5}}>
                    <Text style={{color: '#E8EFFD', fontFamily: 'Roboto-Medium',fontSize: 18}}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
              </View>
              
            </View>

<View style={{       paddingBottom: 100}}>
            {option1.array.map(info => {
          // console.log(JSON.stringify(info.func, null, 2));
          return (
            <TouchableOpacity
              onPress={() => info.func(info.key)}
              key={info.key}>
              <View style={styles.touchContainer}>
                <View style={styles.iconStyle}>
                  <Image style={styles.edit} source={info.image} />
                </View>

                <View style={styles.textAreaContainer}>
                  <Text style={styles.textArea}>{info.name}</Text>
                </View>

                <View style={{position: 'absolute', right: 20}}>
                <Icon name="chevron-right" size={25} color={'#000'} style={{marginLeft: 3, marginTop: 3}}/>
                </View>

                
              </View>
            </TouchableOpacity>
          );
        })}

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
    },
    touchContainer: {
        flexDirection: 'row',
        marginLeft: 34,
        marginTop: 20,
        // width: 328,
      },
      iconStyle: {
        width: 27,
        height: 27,
        // backgroundColor: '#E6F0FF',
        borderRadius: 5,
      },
      iconStyle1: {
        width: 27,
        height: 27,
        backgroundColor: '#FFE6E6',
        borderRadius: 5,
      },
      textAreaContainer: {
        marginLeft: 19,
      },
      textArea: {
        // textAlignVertical: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: '#374957'
      },
  });
  