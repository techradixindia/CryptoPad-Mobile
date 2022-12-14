import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avtar from '../../assets/images/avatar.png';
import { baseUrl } from '../../utils/env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Spinner from './Spinner';

export default function Profile() {
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation();

  {/* *********************Logout Start********************/ }
  const onClickLogout = async () => {
    setIsLoading(true)
    const value = await AsyncStorage.getItem('cpad');
    var userInfo = JSON.parse(value);
    let config = {
      headers: {
        "Authorization": `${userInfo.results.access_token}`,
      },
    }
    let url = baseUrl + 'logout/'
    axios.delete(url, config)
      .then(res => {
        if (res.data.code === 200) {
          setOpenModal(false)
          setIsLoading(false)
          AsyncStorage.removeItem('cpad');
          AsyncStorage.clear()
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Logout Successfully',
          });
          navigation.navigate('Login')
        }
      })
      .catch(err => {
        setIsLoading(false)
        Toast.show({
          type: 'error',
          text1: 'error',
          text2: err.response.data.errors[0].error
        });
      })

  }
  {/* *********************Logout End********************/ }


  return (
    <>
      {/* Open modal for logout start */}
      <Modal transparent={true}
        animationType={'fade'}
        hardwareAccelerated={true}
        visible={openModal}>
        <Pressable onPress={() => { setOpenModal(false) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000060' }}>
          <View style={{ backgroundColor: "#fff", width: "80%", height: "20%", borderRadius: 20 }} >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ textAlign: "center", color: "black", fontWeight: "bold", fontSize: 15, }}>Are you sure you want to logout?</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20 }}>
              <Pressable style={{ flex: 1, backgroundColor: "#87CEEB", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => { onClickLogout(), setOpenModal(false) }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable style={{ flex: 1, backgroundColor: '#000', height: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 40 }} onPress={() => { setOpenModal(false) }}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      {/* Open modal for logout end */}

      <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 15, alignItems: 'center', backgroundColor: "#000" }}>
        <Spinner isLoading={isLoading} />
        <View style={{ zIndex: 1 }}>
          <Toast />
        </View>
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={Avtar} style={{ height: 80, width: 80, borderRadius: 100, borderWidth: 1, borderColor: "white" }} />
          <Text style={{ color: "white", marginTop: 10, fontWeight: "400" }}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={[styles.inputContainer, { marginTop: 30 }]}>
          <TextInput
            autoCorrect={false}
            style={{ color: 'darkBlue', flex: 1 }}
            placeholder="First Name"
            placeholderTextColor={"#000"}

          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 10 }]}>
          <TextInput
            autoCorrect={false}
            style={{ color: 'darkBlue', flex: 1 }}
            placeholder="Last Name"
            placeholderTextColor={"#000"}
          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 10 }]}>
          <TextInput
            autoCorrect={false}
            style={{ color: 'darkBlue', flex: 1 }}
            placeholder="Email Address"
            placeholderTextColor={"#000"}
          />
        </View>

        <TouchableOpacity style={[styles.buttonContainer, { marginTop: 20 }]} >
          <Text style={{ flex: 1, color: "black", textAlign: "center", fontSize: 18 }}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => { setOpenModal(true) }}>
          <Text style={{ flex: 1, color: "black", textAlign: "center", fontSize: 18 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  inputContainer: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    borderColor: "#E3E2E2",
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 10
  },
  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: "#87CEEB",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#87CEEB",
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10
  },
})