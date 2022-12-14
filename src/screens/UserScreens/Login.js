import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Image, TextInput, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/images/cryptopadFullLogo.png';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { baseUrl } from '../../utils/env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const navigation = useNavigation();

  const height = Dimensions.get('window').height

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onLogin = () => {
    // setIsLoading(true)
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
        console.log("success", res.data.data)
        const userInfo = res.data.data
        AsyncStorage.setItem("cpad", JSON.stringify(userInfo))
        if (res.data.data.status === 200) {
          navigation.navigate("BottomNavigator")
        }
      }
      )
      .catch(err => {
        // setIsLoading(false)
        console.log("error", err.response.data)

      }
      )

  }

  return (
    <LinearGradient colors={['#fff', '#fff']} style={[{ flex: 1 }]}>
      <StatusBar hidden={true} />
      <TouchableWithoutFeedback>
        <SafeAreaView>
          <View style={[{ height: height }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.36 }}>
              <Image source={Logo} style={styles.logo1} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
              <Text style={[{ fontSize: 22, marginBottom: 25, fontWeight: '600', color: "#000" }]}>Login</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  autoCorrect={false}
                  style={{ color: 'darkBlue', flex: 1 }}
                  placeholder="Email Address"
                  placeholderTextColor={"#000"}
                  value={email}
                  onChangeText={text => setEmail(text)} />
              </View>

              <View style={[styles.inputContainer, { marginTop: 10 }]}>
                <TextInput
                  autoCorrect={false}
                  style={{ color: 'darkBlue', flex: 1 }}
                  placeholder="Password"
                  placeholderTextColor={"#000"}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry />

                <Icon
                  name={'eye-outline'}
                  style={{ color: '#000', fontSize: 25 }} />
              </View>

              <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", width: '100%', paddingHorizontal: 20 }}>
                <CheckBox
                  tintColors={{ true: '#6777ef', false: 'grey' }}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)} />

                <Text style={{ color: "black", textAlign: "center" }}>I have reviewed and agree to the <Text style={{ color: "#6777ef" }}>Terms & conditions</Text></Text>
              </View>

              <TouchableOpacity style={styles.buttonContainer} onPress={() => { onLogin() }}>
                <Text style={{ flex: 1, color: "white", textAlign: "center", fontSize: 18 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View >
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
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