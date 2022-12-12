import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-paper';
import DummyData from './DummyData';
import Iconfirst from "../../assets/images/icon1.png"
import Plus from "react-native-vector-icons/Entypo"

const MyOrders = () => {
  return (

    <View style={{ flex: 1, backgroundColor: "#000", paddingHorizontal: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "flex-start", flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 3, marginTop: 10 }}>
            <ProgressBar progress={0.7} color={"#87CEEB"} style={{ height: 7, borderRadius: 100 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <Text style={{ color: '#DCDCDC' }}>0% Wallets</Text>
              <Text style={{ color: '#DCDCDC' }}><Text style={{ color: "#87CEEB" }}>100% </Text>Exchanges</Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1, backgroundColor: "#303030", paddingHorizontal: 5, height: 30, left: 10, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: '#DCDCDC' }}>Refresh All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput placeholderTextColor='darkgrey' placeholder='Search for wallet or exchnage' style={styles.input}></TextInput>
          <TouchableOpacity style={{ marginTop: 10 }} ><Text style={[styles.black_button, { marginTop: 10 }]}>Add your first wallet</Text></TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#87CEEB", fontSize: 20 }}>My Exchanges +</Text>
        </View>
      </View>
      <View style={{ flex: 1.5 }}>
        <FlatList
          data={DummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}>
                <Image source={Iconfirst} style={{ height: 30, width: 30, borderRadius: 80 }} />
              </View>
              <View style={{ flex: 2.2, justifyContent: "center" }}>
                <Text style={styles.text2}>{item.name}</Text>
                <Text style={styles.text1}>{item.price} coins  +</Text>
              </View>
              <View style={{ flex: 1.4, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.text2}>$3'545.63</Text>
                <Text></Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                <Plus name="plus" size={20} color="white" />
              </View>
            </View>
          } />
      </View>
    </View>
  )
}

export default MyOrders

const styles = StyleSheet.create({
  input: {
    width: 396,
    height: 35,
    backgroundColor: '#282828',
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 5,
    color: "#000"
  },
  black_button: {
    color: 'black',
    backgroundColor: "#87CEEB",
    width: 396,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "#282828",
    flexDirection: "row",
    paddingHorizontal: 10,
    margin: 5,
    height: 70,
    borderRadius: 10,

  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    color: "darkgrey",
    marginLeft: 20,
    marginTop: 5
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    marginLeft: 20
  },

})