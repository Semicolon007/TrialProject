// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import SplashScreen from '../Screens/SplashScreen';


const Stack = createStackNavigator();


const HomeNavigator = (props) => {
  
  return (
   
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    
    <Stack.Screen name={"LandingScreen"} component={LandingScreen} />
    </Stack.Navigator>
   
  );
};






export default HomeNavigator;