import React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "../Navigation/HomeNavigator";
import CustomDrawer from "../Navigation/CustomDrawer";
import DestinationSearch from '../Screens/DestinationSearch';

const Drawer = createDrawerNavigator();

const SideDrawer = (props) => {
  return (
    
      <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
      } screenOptions={{
        headerStyle: {
          backgroundColor: "transparent", //colors.background,
          elevation: 0, // Android
        },
        
      }}>
        <Drawer.Screen name="Get a Ride" component={HomeNavigator}    options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}  />
            <Drawer.Screen name="Destination Search" component={DestinationSearch}    options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}  />

      

      </Drawer.Navigator>
   
  );
};

export default SideDrawer;