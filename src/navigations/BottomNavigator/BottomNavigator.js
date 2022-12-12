import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/UserScreens/HomeScreen';
import MyOrders from '../../screens/UserScreens/MyOrders';
import Offers from '../../screens/UserScreens/HistoryScreen';
import Profile from '../../screens/UserScreens/Profile';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import OrderIcon from 'react-native-vector-icons/AntDesign'
import History from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome'
import Plus from "react-native-vector-icons/Entypo"
import Income from '../../screens/Income';
import Wallet from "react-native-vector-icons/Ionicons"
import HistoryScreen from '../../screens/UserScreens/HistoryScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen name="Dashboard" component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <HomeIcon name="dashboard" size={25} color="black" />
          },

          headerTitleAlign: "left", headerTitle: "Dashboard", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />


      <Tab.Screen name="Income" component={Income}
        options={{
          tabBarIcon: () => {
            return <OrderIcon name="plus" size={25} color="black" />
          },
          headerTitleAlign: "left", headerTitle: "Income", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />



      <Tab.Screen name="Wallet" component={MyOrders}
        options={{
          tabBarIcon: () => {
            return <Wallet name="wallet" size={25} color="black" />
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
          tabBarIcon: () => {
            return <History name="history" size={25} color="black" />
          },
          // headerLeft: () => (
          //   <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          // ),
          headerTitleAlign: "left", headerTitle: "History", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff"
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: () => {
            return <ProfileIcon name="user" size={25} color="black" />
          },
          // headerLeft: () => (
          //   <Hamburger name="navicon" size={30} color="black" style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />
          // ),
          headerTitleAlign: "left"
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})