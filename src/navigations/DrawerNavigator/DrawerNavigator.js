import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import PrivacyPolicy from '../../screens/UserScreens/PrivacyPolicy';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from "react-native-vector-icons/Feather"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Login from '../../screens/UserScreens/Login';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {

  const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#E93858', '#FF6A2B',]} style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              padding: 20,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", flex: 1, }}>
              <LeftIcon name="chevron-left" size={30} color="white" onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} />
              <Text style={{ fontSize: 20, color: "white", marginLeft: 5 }}>Menu</Text>
            </View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              }}
              style={{ width: 50, height: 50, borderRadius: 30, borderWidth: 1, borderColor: "white" }}
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 18,
          margin: 5
        },
        drawerStyle: {
          width: "100%",
        }
      }}>
      <Drawer.Screen name="Home Container" component={BottomNavigator} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})




