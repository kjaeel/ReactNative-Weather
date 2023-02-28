

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* The Screens */
// import {Home} from '../screens/home/home';
import {Notification} from '../screens/notification/notification';

import { UserContext } from '../context';



const Notifications  = createStackNavigator();



export const NotificationStack = () => {
  const {user, setUser} = React.useContext(UserContext);



// console.log("in Home navigation stack", user.uid)


  return (
    <Notifications.Navigator screenOptions={{headerShown: false}}>
  
      <Notifications.Screen name="Notification" component={Notification} />
        
   
     
    </Notifications.Navigator>
  );
};
