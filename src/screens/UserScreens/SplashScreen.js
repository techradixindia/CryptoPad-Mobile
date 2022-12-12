

import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React from 'react';
import Logo from '../../assets/images/cryptopadLogo.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
}

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