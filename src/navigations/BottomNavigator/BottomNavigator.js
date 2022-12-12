import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/UserScreens/HomeScreen';
import MyOrders from '../../screens/UserScreens/MyOrders';
import Offers from '../../screens/UserScreens/Offers';
import Profile from '../../screens/UserScreens/Profile';
import HomeIcon from 'react-native-vector-icons/Entypo'
import OrderIcon from 'react-native-vector-icons/AntDesign'
import OfferIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome'
import Hamburger from "react-native-vector-icons/EvilIcons"

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <HomeIcon name="home" size={25} color="black" />
          },
          headerLeft: () => (
            <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          ),
          headerTitleAlign: "center"
        }}
      />
      <Tab.Screen name="My Orders" component={MyOrders}
        options={{
          tabBarIcon: () => {
            return <OrderIcon name="star" size={25} color="black" />
          },
          headerLeft: () => (
            <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          ),
          headerTitleAlign: "center"
        }}
      />
      <Tab.Screen name="Offers" component={Offers}
        options={{
          tabBarIcon: () => {
            return <OfferIcon name="offer" size={25} color="black" />
          },
          headerLeft: () => (
            <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          ),
          headerTitleAlign: "center"
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: () => {
            return <ProfileIcon name="user" size={25} color="black" />
          },
          headerLeft: () => (
            <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          ),
          headerTitleAlign: "center"
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})