import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avtar from '../../assets/images/avatar.png';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, padding: 10 }}>
      <Image source={Avtar} style={{ height: 80, width: 80, borderRadius: 100, marginBottom: 30 }} />
      <TextInput placeholderTextColor="#000" placeholder='First Name' style={styles.form_input_inner}></TextInput>
      <TextInput placeholderTextColor="#000" placeholder='Last Name' style={styles.form_input_inner1}></TextInput>
      <TextInput placeholderTextColor="#000" placeholder='Email_ID' style={styles.form_input_inner2}></TextInput>

      <TouchableOpacity style={[styles.appButtonContainer, { backgroundColor: "#000" }]}>
        <Text style={styles.appButtonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.appButtonContainer, { backgroundColor: "#000" }]}>
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
    backgroundColor: "#04C6F1",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",

  },
  form_input_inner: {
    width: "100%",
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    color: "black"
  },
  form_input_inner1: {
    width: "100%",
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    color: "black",
    marginTop: 10,
  },
  form_input_inner2: {
    width: "100%",
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    color: "black",
    marginTop: 10,
  },






})