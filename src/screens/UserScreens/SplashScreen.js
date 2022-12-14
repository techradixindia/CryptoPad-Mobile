

import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../../assets/images/cryptopadLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      auth()
    }, 1650)

  })
  const auth = async () => {
    const value = await AsyncStorage.getItem('cpad');
    let updatedValue = JSON.parse(value);
    if (updatedValue) {
      navigation.navigate('BottomNavigator')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});