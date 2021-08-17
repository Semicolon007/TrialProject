import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


const PlaceRow = ({data}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home' ? (
          <Entypo name="home" siz={25} color={'white'} />
        ) : (
          <Entypo name="location-pin" siz={25} color={'white'} />
        )}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
   top:10,
    

  },
  iconContainer: {
    backgroundColor: '#4066FF',
    padding: 4,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {
paddingTop:15},
});