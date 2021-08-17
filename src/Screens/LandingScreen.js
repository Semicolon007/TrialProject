import React, {useState, useEffect} from 'react';
import HomeMap from '../Components/HomeMap';
import HomeSearch from '../Components/HomeSearch';
import Message from '../Components/Message';
// Import React and Component
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Dimensions,
  Image
} from 'react-native';
import SplashScreen from './SplashScreen';


const LandingScreen = () => {
  
    return(
      <View>
        
        {/* <SplashScreen/> */}
        <HomeMap/>
        <Message/>
        <HomeSearch/>
        
        </View>
    )
};

export default LandingScreen;
