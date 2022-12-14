import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/UserScreens/HomeScreen';
import Profile from '../../screens/UserScreens/Profile';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import Incomeicon from 'react-native-vector-icons/Fontisto'
import History from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome'
import Plus from "react-native-vector-icons/Entypo"
import Walleticon from "react-native-vector-icons/Ionicons"
import HistoryScreen from '../../screens/UserScreens/HistoryScreen';
import Income from '../../screens/UserScreens/Income';
import Wallet from '../../screens/UserScreens/Wallet';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator shifting={true} screenOptions={{ tabBarStyle: { height: 50 }, tabBarHideOnKeyboard: true, tabBarActiveTintColor: "#fff", tabBarStyle: { backgroundColor: "black" } }}>
      <Tab.Screen name="Dashboard" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon name="dashboard" size={25} style={{ color: focused ? "#87CEEB" : "grey", }} />
          },

          headerTitleAlign: "left", headerTitle: "Dashboard", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", tabBarLabelStyle: { fontSize: 12 }
        }}
      />

      <Tab.Screen name="Income" component={Income}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Incomeicon name="money-symbol" size={25} style={{ color: focused ? "#87CEEB" : "grey", }} />
          },
          headerTitleAlign: "left", headerTitle: "Income", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", tabBarLabelStyle: { fontSize: 12 }
        }}
      />

      <Tab.Screen name="Wallet" component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Walleticon name="wallet" size={25} style={{ color: focused ? "#87CEEB" : "grey", }} />
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
          headerTitleAlign: "left", headerTitle: "Wallets", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", tabBarLabelStyle: { fontSize: 12 }
        }}
      />

      <Tab.Screen name="History" component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <History name="history" size={25} style={{ color: focused ? "#87CEEB" : "grey", }} />
          },

          headerTitleAlign: "left", headerTitle: "History", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", tabBarLabelStyle: { fontSize: 12 }
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ProfileIcon name="user" size={25} style={{ color: focused ? "#87CEEB" : "grey", }} />
          },

          headerTitleAlign: "left", headerTitle: "Profile", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", tabBarLabelStyle: { fontSize: 12 }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})