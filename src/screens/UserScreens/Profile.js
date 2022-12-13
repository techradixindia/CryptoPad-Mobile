import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avtar from '../../assets/images/avatar.png';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 15, alignItems: 'center', backgroundColor: "#000" }}>
      <Image source={Avtar} style={{ height: 80, width: 80, borderRadius: 100, borderWidth: 1, borderColor: "white" }} />
      <Text style={{ color: "white", marginTop: 10, fontWeight: "400" }}>Edit Profile</Text>
      <TextInput placeholderTextColor="#000" placeholder='First Name' style={[styles.form_input_inner, { marginTop: 20 }]}></TextInput>
      <TextInput placeholderTextColor="#000" placeholder='Last Name' style={[styles.form_input_inner, { marginTop: 10 }]}></TextInput>
      <TextInput placeholderTextColor="#000" placeholder='Email_ID' style={[styles.form_input_inner, { marginTop: 10 }]}></TextInput>

      <TouchableOpacity style={[styles.appButtonContainer, { backgroundColor: "#87CEEB" }]}>
        <Text style={styles.appButtonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.appButtonContainer, { backgroundColor: "#87CEEB" }]}>
        <Text style={styles.appButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 20,
    elevation: 5,
    height: 50,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,

  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
    alignSelf: "center",

  },
  form_input_inner: {
    width: "100%",
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: "black"
  },

})