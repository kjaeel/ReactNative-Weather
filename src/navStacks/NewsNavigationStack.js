

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* The Screens */

import {SavedNews} from '../screens/news/savedNews';

import { UserContext } from '../context';



const NewsStack = createStackNavigator();



export const NewsNavigationStack = () => {
  const {user, setUser} = React.useContext(UserContext);



// console.log("in Home navigation stack", user.uid)


  return (
    <NewsStack.Navigator screenOptions={{headerShown: false}}>
  
      <NewsStack.Screen name="SavedNews" component={SavedNews} />
        

    </NewsStack.Navigator>
  );
};
