

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* The Screens */

import {MoreScreen} from '../screens/more/moreScreen';

import { UserContext } from '../context';



const MoreStack = createStackNavigator();



export const MoreNavigationStack = () => {
  const {user, setUser} = React.useContext(UserContext);



// console.log("in Home navigation stack", user.uid)


  return (
    <MoreStack.Navigator screenOptions={{headerShown: false}}>
  
      <MoreStack.Screen name="MoreScreen" component={MoreScreen} />
        

    </MoreStack.Navigator>
  );
};
