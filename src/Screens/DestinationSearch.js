import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation, useRoute} from '@react-navigation/native';
import PlaceRow from '../Components/PlaceRow';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AsyncStorage} from 'react-native';
import {Header} from 'react-native-elements';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 27.6866, lng: 83.4323}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

/*const DestinationSearch = ({navigation}) => {
 */
const DestinationSearch = () => {
  const [current_latitude, setLatitude] = useState(0);
  const [current_longitude, setLongitude] = useState(0);
  const [position, setPosition] = useState();

  const currentLocation = {
    description: 'Current Location',
    geometry: {
      location: {lat: current_latitude, lng: current_longitude},
      address: position,
    },
  };
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderWidth:1,
          height: Dimensions.get('window').height -600 ,
          margin:20,
        }}>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            placeholder="Current Location"      
            placeholderTextColor="red"
            onPress={(data, details = null) => {
              setOriginPlace({data, details});
            }}
            enablePoweredByContainer={false}
            predefinedPlacesAlwaysVisible={true}
            listViewDisplayed={'auto'}
            // suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: styles.autocompleteContainer,
              listView: styles.listView,
              separator: styles.separator,
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            fetchDetails
            query={{
              key: 'AIzaSyDYdyoLCeDWwx9UL2yb9klNB5yyDdeirgY',
              language: 'en',
            }}
            // renderRow={data => <PlaceRow data={data} />}
             renderDescription={data => data.description || data.vicinity}
            // predefinedPlaces={[currentLocation, homePlace, workPlace]}
          />

          <GooglePlacesAutocomplete
            placeholder="Destination"
            onPress={(data, details = null) => {
              setDestinationPlace({data, details});
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: {
                ...styles.autocompleteContainer,
                top: 55,
                borderTopWidth:0.5,
              },
              separator: styles.separator,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyDYdyoLCeDWwx9UL2yb9klNB5yyDdeirgY',
              language: 'en',
            }}
            renderRow={data => <PlaceRow data={data} />}
          />

          {/* Circle near Origin input */}
          <View style={styles.outercircle}>
          <View style={styles.innercircle}/> 
        </View>
        

          {/* Square near Destination input */}
          <View style={styles.square} >
          <View style={styles.outercircle}>
          <View style={styles.innercircle}/> 
        </View>
        </View>

      </View>
     
      </View>
      <View style={{marginLeft:30,}}>
      <PlaceRow data={currentLocation} />
      <PlaceRow data={homePlace} />
      <PlaceRow data={workPlace} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

 const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#fff', 
    marginLeft: 20,
    fontWeight:'500',  
  },

  separator: {
    backgroundColor: '#000',
    
    
  },

  autocompleteContainer: {
    position: 'absolute',
    top: 5,
    left: 10,
    right: 10,
  },

 
  iconContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},

  square: {

    top: 35,


 
  },
  
  screenContainer: {
    flex: 1,
    backgroundColor:"#fff"
  
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  
    justifyContent: 'space-around',
    position: 'relative',
  },
  outercircle:{
    backgroundColor:'#4066FF',
    top:25,
    left:15,
    width: 15,
   height: 15,
   borderRadius:15,
   alignItems:'center',
   justifyContent:'space-around',
  
  },

  innercircle:{
    backgroundColor:'white',
    width:8,
    height:8,
    borderRadius:8,
  },


 
});
