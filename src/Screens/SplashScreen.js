// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>TAXI DEMO APP</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SideDrawer')}
          style={styles.getStarted}>
          <Text style={styles.startedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },

  getStarted: {
    backgroundColor: '#4066FF',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    top: '50%',
    borderRadius: 50,
    width: '95%',
  },

  header: {
    justifyContent: 'center',
    fontSize: 30,
    color: '#4066FF',
    fontWeight: 'bold',
  },
  startedText: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonContainer: {
    alignItems: 'center',
  },
  textContainer: {
    height: Dimensions.get('window').height - 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
  },
});
