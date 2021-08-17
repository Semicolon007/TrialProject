import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Rating, AirbnbRating} from 'react-native-ratings';
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'white', padding: 20}}>
        {/* User Row */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Icon name="user" size={40} color="grey" />
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <Text style={{color: '#000000', fontSize: 30}}>
              Ragnar Lothbrok
            </Text>

            <AirbnbRating
              count={5}
              defaultRating={5}
              size={15}
              showRating={false}
              selectedColor={'#4066FF'}
            />
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#000000',
            borderTopColor: '#000000',
            marginBottom: 5,
            paddingBottom:30
          }}>
          <Pressable
            onPress={() => {
              console.warn('View Profile');
            }}>
            <Text style={{color: 'black', fontSize: 14}}>View Profile</Text>
          </Pressable>
        </View>
      </View>

      {/* <DrawerItemList {...props} /> */}
      <Pressable
        onPress={() => {
          console.log('get a ride');
        }}>
        <View style={styles.car}>
          <Icon name="car" size={20} color="#000000" />
          <Text style={styles.menuTexts}>Get a ride</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('current ride');
        }}>
        <View style={styles.car}>
          <Icon name="car" size={20} color="#000000" />
          <Text style={styles.menuTexts}>Current Ride</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('logout');
        }}>
        <View style={styles.car}>
          <Icon name="sign-out" size={20} color="#000000" />
          <Text
            style={{
              paddingLeft: 28,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Logout
          </Text>
        </View>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  car: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  menuTexts: {
    marginBottom:20,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
