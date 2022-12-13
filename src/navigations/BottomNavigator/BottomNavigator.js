import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/UserScreens/HomeScreen';
import MyOrders from '../../screens/UserScreens/MyOrders';
import Profile from '../../screens/UserScreens/Profile';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import OrderIcon from 'react-native-vector-icons/AntDesign'
import History from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome'
import Plus from "react-native-vector-icons/Entypo"
import Wallet from "react-native-vector-icons/Ionicons"
import HistoryScreen from '../../screens/UserScreens/HistoryScreen';
import Income from '../../screens/UserScreens/Income';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator shifting={true} screenOptions={{ tabBarStyle: { height: 50 }, tabBarHideOnKeyboard: true, tabBarActiveTintColor: "#E93858" }}>
      <Tab.Screen name="Dashboard" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon name="dashboard" size={25} color="grey" />
          },

          headerTitleAlign: "left", headerTitle: "Dashboard", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff",
        }}
      />

      <Tab.Screen name="Income" component={Income}
        options={{
          tabBarIcon: ({ focused }) => {
            return <OrderIcon name="plus" size={25} color="grey" />
          },
          headerTitleAlign: "left", headerTitle: "Income", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />

      <Tab.Screen name="Wallet" component={MyOrders}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Wallet name="wallet" size={25} color="grey" />
          },
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ backgroundColor: "#303030", height: 35, width: 55, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#DCDCDC' }}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10, backgroundColor: "#303030", height: 35, width: 55, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#DCDCDC' }}>24h%</Text>
              </TouchableOpacity>
              <Plus name="plus" size={30} color="skyblue" style={{ padding: 10 }} />
            </View>
          ),
          headerTitleAlign: "left", headerTitle: "Wallets", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />

      <Tab.Screen name="History" component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <History name="history" size={25} color="grey" />
          },

          headerTitleAlign: "left", headerTitle: "History", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ProfileIcon name="user" size={25} color="grey" />
          },

          headerTitleAlign: "left", headerTitle: "Profile", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})