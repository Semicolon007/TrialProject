import React from 'react';
import {View, Text, Pressable, SafeAreaView,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const HomeSearch = () => {
  const navigation = useNavigation();

//   const goToSearch = () => {
//     navigation.navigate('Find');
//   };

  return (
  <SafeAreaView style={styles.container}>

    <View>
      <View style={styles.greeting}>
      <Text style={styles.greeting}>Hey there,Ragnar</Text>
      </View>
      <View style={styles.row}>
      
      <Pressable  style={styles.inputBox} onPress={()=> navigation.navigate('DestinationSearch')}>

        <Pressable style={styles.outercircle}>
        <Pressable style={styles.innercircle}></Pressable>
        </Pressable>
        
        <Text style={styles.inputText}>Where are you going?</Text>
      </Pressable>
      </View>
    
    </View>
    </SafeAreaView>
  );
};

export default HomeSearch;


const styles = StyleSheet.create({

 container:{
        
        height:"15%",
        backgroundColor:"white",
    },
    outercircle:{
      backgroundColor:'#4066FF',
      width: 20,
     height: 20,
     borderRadius:20,
     alignItems:'center',
     justifyContent:'space-around',
    
    },

    innercircle:{
      backgroundColor:'white',
      width:8,
      height:8,
      borderRadius:8,
    },

  inputBox: {
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position:'relative',
  },
  row: {
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    elevation:1,
    borderRadius:5,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginLeft:10,
  },
  greeting: {
    fontSize: 25,
    fontWeight: "bold",
    color: 'black',
    marginLeft:5


    ,

  },



 
})
