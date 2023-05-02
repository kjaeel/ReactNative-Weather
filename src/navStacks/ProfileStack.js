

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* The Screens */
// import {Home} from '../screens/home/home';
import {Profile} from '../screens/profile/profile';

import { UserContext } from '../context';



const ProfileNav  = createStackNavigator();



export const ProfileStack = () => {
  const {user, setUser} = React.useContext(UserContext);



// console.log("in Home navigation stack", user.uid)


  return (
    <ProfileNav.Navigator screenOptions={{headerShown: false}}>
  
      <ProfileNav.Screen name="Profile" component={Profile} />
        
   
     
    </ProfileNav.Navigator>
  );
};
