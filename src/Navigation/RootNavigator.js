
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import SideDrawer from '../Navigation/SideDrawer';
import DestinationSearch from '../Screens/DestinationSearch';

const Stack = createStackNavigator();

  
  const RootNavigator = () => {
    

  
    return (
    
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
         
          <Stack.Screen
            name="SideDrawer"
            component={SideDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DestinationSearch"
            component={DestinationSearch}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
     
    );
  };
  export default RootNavigator;
  