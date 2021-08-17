import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from '@react-native-community/geolocation';


const HomeMap = (props) => {

return(

<MapView
style={{ width: "100%", height: "75%" }}
showsUserLocation={true}
initialRegion={{
  latitude: 27.700769,
  longitude: 85.300140,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
}}
></MapView>)
};

export default HomeMap;

