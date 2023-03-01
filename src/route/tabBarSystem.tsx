/*
 * Handles the tab navigation system
 */
import React from 'react';
import {Image,Platform,View} from 'react-native';
import {ProfileStack} from '../navStacks/ProfileStack';
import {HomeNavigationStack} from '../navStacks/HomeNavigationStack';
import {MoreNavigationStack} from '../navStacks/MoreNavigationStack';
import {NewsNavigationStack} from '../navStacks/NewsNavigationStack';
import {NotificationStack} from '../navStacks/NotificationStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthenticatedStack = createBottomTabNavigator();

/* Style Tab Bar */
const tabBarOptions = ({route}) => ({
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    display: 'flex',
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    elevation: 5,
    backgroundColor: '#024092',
    borderRadius: 30,
    height: 60,
  },


  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'HomeStack') {
      
      return focused ? (
        <Image source={require('../assets/botnav/trash/Home.png')} style={{width: 30, height: 30}}  />
      ) : (
   
        <Image source={require('../assets/botnav/trash/HomeA.png')} style={{width: 30, height: 30}} />
      );
        
      
    }
     else if (route.name === 'Notification') {
      return focused ? (
        <Image source={require('../assets/botnav/trash/Notification.png')} style={{width: 24, height: 30}} />
      ) : (
        <Image source={require('../assets/botnav/trash/NotificationA.png')} style={{width: 24, height: 30}} />
      );
    } else if (route.name === 'NewsStack') {
      return focused ? (
        <Image source={require('../assets/botnav/trash/Bookmark.png')} style={{width: 24, height: 30}} />
      ) : (
        <Image source={require('../assets/botnav/trash/BookmarkA.png')} style={{width: 24, height: 30}}  />
      );
    } 
    else if (route.name === 'FlightStack') {
      return focused ? (
        <Image source={require('../assets/botnav/trash/Category.png')} style={{width: 34, height: 34}} />
  
      ) : (
        <Image source={require('../assets/botnav/trash/CategoryA.png')} style={{width: 34, height: 34}} />
      );
    } 
    else if (route.name === 'Profile') {
      return focused ? (
        <Image source={require('../assets/botnav/trash/Profile.png')} style={{width: 24, height: 30}} />
      ) : (
        <Image source={require('../assets/botnav/trash/ProfileA.png')} style={{width: 24, height: 30}} />
      );
    }
    return <></>;
  },
  tabBarShowLabel: false,
  headerShown: false,

});

export const TabWrapper = () => {
  return (
    <AuthenticatedStack.Navigator
      // initialRouteName="NewsStack"

      screenOptions={tabBarOptions}
      
      >
          <AuthenticatedStack.Screen
        name="HomeStack"
        component={HomeNavigationStack}

        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View
        //       style={{
        //         top: Platform.OS === 'ios' ? 10 : 0,
        //       }}>
        //        <Image source={require('../assets/homeIcon/homeIconActive.png')} />
        //     </View>
        //   ),
        // }}
      />
  
      <AuthenticatedStack.Screen
        name="FlightStack"
        component={MoreNavigationStack}
      />
   
        <AuthenticatedStack.Screen
        name="NewsStack"
        component={NewsNavigationStack}
      />
      <AuthenticatedStack.Screen
        name="Notification"
        component={NotificationStack}
      />
      <AuthenticatedStack.Screen
        name="Profile"
        component={ProfileStack}
      />
    </AuthenticatedStack.Navigator>
  );
};
