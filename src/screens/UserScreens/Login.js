import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This Is Login Screen</Text>

      <LinearGradient colors={['#4c669f', 'red',]} >
      <TouchableOpacity
        style={{ padding: 20, marginVertical: 10}}
        onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>
      </LinearGradient>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{color: 'red'}}>New User Signup</Text>
      </TouchableOpacity>
    </View>
  );
}