import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Image, TextInput, StyleSheet, Dimensions, StatusBar, Keyboard, Pressable, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/cryplogo.png';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import Mailicon from "react-native-vector-icons/Feather"
import { baseUrl } from '../../utils/env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Spinner from './Spinner';

export default function Login() {

  const navigation = useNavigation();

  const height = Dimensions.get('window').height

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    let error = 0;
    if (email == null || email == '') {
      setEmailError("Email is required*")
      error = 1
    } else {
      setEmailError('')
    }
    if (password == null || password == '') {
      setPasswordError("Password is required*")
      error = 1
    } else {
      setPasswordError('')
    }
    if (error == 0) {
      setIsLoading(true)
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json"
        }
      };
      const body = {
        email: email,
        password: password
      }
      axios.post(`${baseUrl}login/`, body, config)
        .then((res) => {
          setIsLoading(false)
          const userInfo = res.data.data
          AsyncStorage.setItem("cpad", JSON.parse(userInfo))
          console.log(">>>>>", AsyncStorage.getItem("cpad", JSON.stringify(userInfo)));
          if (res.data.data.status === 200) {
            navigation.navigate("BottomNavigator")
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: "Login Successfully!"
            });
          }
        }
        )
        .catch(err => {
          setIsLoading(false)
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err.response.data.errors[0].email
          });
        }
        )
    }
  }

  const message = () => {
    if (email && password !== '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Please agree to the terms & conditions"
      });
    }
  }

  const openUrlAbout = () => {
    Linking.openURL('https://cryptopad.ai/account/term')
  }


  return (
    <View style={[{ flex: 1, backgroundColor: "white" }]}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <SafeAreaView>
          <StatusBar hidden={true} />
          <View style={{ zIndex: 1 }}>
            <Toast />
          </View>
          <Spinner isLoading={isLoading} />
          <View style={[{ height: height }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.36 }}>
              <Image source={Logo} style={styles.logo1} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
              <Text style={[{ fontSize: 22, marginBottom: 25, fontWeight: '600', color: "#000" }]}>Login</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  enablesReturnKeyAutomatically
                  style={{ color: 'darkBlue', flex: 1 }}
                  placeholder="Email Address"
                  placeholderTextColor={"#000"}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text)
                    text == null || text == '' ? setEmailError('Email is required*') : setEmailError('')
                  }}
                />
                <Mailicon
                  name={'mail'}
                  style={{ color: '#000', fontSize: 22 }} />
              </View>
              {
                emailError !== '' &&
                <View style={{ width: "100%", paddingHorizontal: 25, marginTop: 5 }}>
                  <Text style={{ color: "red" }}>{emailError}</Text>
                </View>
              }

              <View style={[styles.inputContainer, { marginTop: 10 }]}>
                <TextInput
                  autoCorrect={false}
                  style={{ color: 'darkBlue', flex: 1 }}
                  placeholder="Password"
                  placeholderTextColor={"#000"}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text)
                    text == null || text == '' ? setPasswordError('Password is required*') : setPasswordError('')
                  }}
                  secureTextEntry={passwordVisibility}
                />

                <Pressable onPress={handlePasswordVisibility}>
                  <Icon
                    name={rightIcon}
                    style={{ color: '#000', fontSize: 22 }} />
                </Pressable>
              </View>

              {
                passwordError !== '' &&
                <View style={{ width: "100%", paddingHorizontal: 25, marginTop: 5 }}>
                  <Text style={{ color: "red" }}>{passwordError}</Text>
                </View>
              }

              <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", width: '100%', paddingHorizontal: 20 }}>
                <CheckBox
                  tintColors={{ true: '#6777ef', false: 'grey' }}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)} />

                <TouchableOpacity onPress={() => openUrlAbout()}>
                  <Text style={{ color: "black", textAlign: "center" }}>I have reviewed and agree to the
                    <Text style={{ color: "#6777ef" }}> Terms & conditions</Text>
                  </Text>
                </TouchableOpacity>
              </View>

              {
                (email !== '' && password !== '' && toggleCheckBox === true) ?
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => { onLogin() }}>
                    <Text style={{ flex: 1, color: "white", textAlign: "center", fontSize: 18 }}>Login</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: "#8a96a1", borderColor: "grey" }]} onPress={() => { message() }}>
                    <Text style={{ flex: 1, color: "white", textAlign: "center", fontSize: 18 }}>Login</Text>
                  </TouchableOpacity>
              }
            </View>
          </View >
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#6777ef',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#6777ef',
    elevation: 3,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 30
  },

  logo1: {
    height: 100,
    width: 350

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
    paddingHorizontal: 20,
    marginHorizontal: 20
  },
})