

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* The Screens */
import {Home} from '../screens/home/home';
import {DetailsScreen} from '../screens/detailsScreen/detailsScreen';

import { UserContext } from '../context';



const HomeStack = createStackNavigator();



export const HomeNavigationStack = () => {
  const {user, setUser} = React.useContext(UserContext);



// console.log("in Home navigation stack", user.uid)


  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
  
      <HomeStack.Screen name="Home" component={Home} />
        
      <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
     
    </HomeStack.Navigator>
  );
};
