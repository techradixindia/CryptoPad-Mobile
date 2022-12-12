import React from 'react';
import {View, Text, TouchableOpacity,TouchableWithoutFeedback,SafeAreaView, Image,TextInput,StyleSheet,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/images/Image1.png';
import CrytoLogo from '../../assets/images/Image4.png';
export default function Login() {
  const navigation = useNavigation();
  const height = Dimensions.get('window').height
  return (
    <LinearGradient colors={['#f3f3f9','#f3f3f9']} style={[{ flex: 1 }]}>
            <TouchableWithoutFeedback>
                <SafeAreaView>
                    <View  style={[{ height: height }]}>
                        <View style={{justifyContent: 'center', alignItems: 'center',height: height * 0.36 }}>
                         <Image source={Logo} style={styles.logo1}/>
                        </View>
                        {/* <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: height * 0.08 }}>
                        <Image source={CrytoLogo} style={styles.logo2}/>
                        </View> */}
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f9' }}>
                            <Text style={[{ fontSize: 22, marginBottom: 25, fontWeight: '600', color: "#000" }]}>Login</Text>
                            {/*
                         Mobile number input 
                        */}
                           <TextInput keyboardType='text-pad' placeholderTextColor="#000" placeholder='Email' style={styles.form_input}></TextInput>
                           <TextInput keyboardType='number-pad' placeholderTextColor="#000" placeholder='Password'style={styles.form_input1} ></TextInput>
                            {/*
                         Get OTP button 
                        */}
                            <TouchableOpacity><Text style={styles.black_button}>Login</Text></TouchableOpacity>
                        </View>
                    </View >
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  form_input: {
    width: 328,
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
form_input1: {
  width: 328,
  height: 50,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 10,
  paddingHorizontal: 20,
  color: "black",
  borderWidth: 1,
   borderColor: "#E3E2E2", 
   elevation: 3,
   marginTop: 10

},
black_button: {
  color: 'white',
  backgroundColor: '#6777ef',
  width: 328,
  height: 50,
  borderRadius: 10,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 18,
  marginTop:30
},
logo1:{
  height:100,
  width:350
 
},
// logo2:{
//   height:100,
//   width:100,
//   marginBottom:35
  
 
// },











})