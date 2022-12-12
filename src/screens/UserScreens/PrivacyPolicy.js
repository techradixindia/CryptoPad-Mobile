import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hamburger from "react-native-vector-icons/EvilIcons"

const PrivacyPolicy = ({navigation}) => {
  return (
    <>
    {/* For custom header and hamburger START*/}
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="#E93858" barStyle="light-content" />
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#E93858", }}>
        <View style={{ flex: 1, justifyContent: "center", }}>
          <Hamburger name="navicon" size={30} color="white" style={{ paddingHorizontal: 10 }} onPress={() => navigation.openDrawer()} />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>Privacy Policy</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Hamburger size={30} color="white" style={{ paddingHorizontal: 10 }} />
        </View>
      </View>
      {/* For custom header and hamburger END*/}

      <View style={{ flex: 12, }}>
        <Text>Privacy Policy</Text>
      </View>
    </View>
  </>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})