import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Image, TextInput, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/images/cryptopadFullLogo.png';
import CheckBox from '@react-native-community/checkbox';
export default function Login() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const navigation = useNavigation();
  const height = Dimensions.get('window').height

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
              <TextInput keyboardType='text-pad' placeholderTextColor="#000" placeholder='Email Address' style={styles.form_input}></TextInput>
              <TextInput keyboardType='text-pad' placeholderTextColor="#000" placeholder='Password' style={[styles.form_input, { marginTop: 15 }]} ></TextInput>
              <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", width: '100%', paddingHorizontal: 20 }}>
                <CheckBox
                  tintColors={{ true: '#6777ef', false: 'grey' }}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ color: "black", textAlign: "center" }}>I have reviewed and agree to the <Text style={{ color: "#6777ef" }}>Terms & conditions</Text></Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}><Text style={styles.login_button}>Login</Text></TouchableOpacity>
            </View>
          </View >
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  form_input: {
    width: 370,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: "black",
    borderWidth: 1,
    borderColor: "#E3E2E2",
    elevation: 3

  },

  login_button: {
    color: 'white',
    backgroundColor: '#6777ef',
    width: 370,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    marginTop: 30,

  },
  logo1: {
    height: 100,
    width: 350

  },

})