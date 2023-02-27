import React, {useState} from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {UserContext} from '../context';
import {Login} from "../screens/login/login";
import {TabWrapper} from '../route/tabBarSystem';
import { Welcome } from '../screens/login/welcome';


const WelcomeStack = createStackNavigator();
const MainStack = createStackNavigator();

 const App = () => {
  /* Handling Global State */
  const [user, setUser] = React.useState(null);
  const [loader, setLoader] = useState(false);



  

  return (
    <UserContext.Provider
    value={{
   
      setUser,
   
    }}>
   <NavigationContainer>
    {console.log(user)}
      {user === null ? (
        <MainStack.Navigator>
        
            <>
            <MainStack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
              <MainStack.Screen
              name="Welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
          
            </>
          
        </MainStack.Navigator>
      ) : (
        <WelcomeStack.Navigator initialRouteName="Welcome">
          <WelcomeStack.Screen
            name="TabWrapper"
            component={TabWrapper}
            options={{headerShown: false}}
          />
        
        </WelcomeStack.Navigator>
      )}
      </NavigationContainer>
   </UserContext.Provider>
  );
};


export default App;
