/*
 * Handles the tab navigation system
 */
import React from 'react';
import {Image,Platform,View} from 'react-native';
// import {ChatNavigationStack} from './screens/chatNavigationStack';
import {HomeNavigationStack} from '../navStacks/HomeNavigationStack';
import {MoreNavigationStack} from '../navStacks/MoreNavigationStack';
// import {FlightNavigationStack} from './screens/flightNavigationStack';
// import {GroupNavigationStack} from './screens/groupNavigationStack';
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
        <Image source={require('../assets/homeIcon/homeIconActive.png')} />
      ) : (
        <Image source={require('../assets/homeIcon/homeIcon.png')} />
      );
    }
     else if (route.name === 'ChatStack') {
      return focused ? (
        <Image source={require('../assets/chatIcon/chatIconActive.png')} />
      ) : (
        <Image source={require('../assets/chatIcon/chatIcon.png')} />
      );
    } else if (route.name === 'MoreStack') {
      return focused ? (
        <Image source={require('../assets/moreIcon/moreIconActive.png')} />
      ) : (
        <Image source={require('../assets/moreIcon/moreIcon.png')} />
      );
    } 
    else if (route.name === 'FlightStack') {
      return focused ? (
        <Image source={require('../assets/joinIcon/joinIconActive.png')} />
  
      ) : (
        <Image source={require('../assets/joinIcon/joinIconActive.png')} />
      );
    } 
    else if (route.name === 'GroupStack') {
      return focused ? (
        <Image source={require('../assets/joinIcon/joinIconActive.png')} />
      ) : (
        <Image source={require('../assets/joinIcon/joinIcon.png')} />
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
      // initialRouteName="GroupStack"

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
        name="GroupStack"
        component={MoreNavigationStack}
      />
        <AuthenticatedStack.Screen
        name="FlightStack"
        component={HomeNavigationStack}
      />
      <AuthenticatedStack.Screen
        name="ChatStack"
        component={HomeNavigationStack}
      />
      <AuthenticatedStack.Screen
        name="MoreStack"
        component={HomeNavigationStack}
      />
    </AuthenticatedStack.Navigator>
  );
};
