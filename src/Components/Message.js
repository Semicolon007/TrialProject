import React from 'react';
import {View,Image,  Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Star from '../Assets/icons/star.svg';

const Message = (props) => {
  return (
    <View style={styles.container}>
    
       <View>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Covid-19 Safety message.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
      </View>
      
    </View>
  );
};

export default Message;


const styles = StyleSheet.create({
  container: {
    height:"10%",
    backgroundColor: '#4066FF',
    padding: 8,
    flexDirection:'row',
    
  },
  
  tinyLogo: {
        width:50,
        height:50,
      },
   
   title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

