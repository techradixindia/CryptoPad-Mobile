import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DummyData from './DummyData'
import Iconfirst from "../../assets/images/icon1.png"
import Plus from "react-native-vector-icons/Entypo"

const HistoryScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        data={DummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "flex-start" }}>
              <Text style={{ fontSize: 16, color: "white" }}>{item.name}</Text>
              <Text style={{ color: "green", fontWeight: "bold", marginTop: 5 }}>Buy</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.text1}>Date</Text>
              <Text style={{ color: "white", marginTop: 5 }}>08-14</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.text1}>Trigger</Text>
              <Text style={{ color: "white", marginTop: 5 }}>Synched</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "grey" }}>Total</Text>
              <Text style={{ color: "white", marginTop: 5 }}>137.977</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "grey" }}>Result</Text>
              <Text style={{ color: "green", marginTop: 5 }}>+27.86%</Text>
            </View>
          </View>
        } />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    flexDirection: "row",
    paddingHorizontal: 5,
    // margin: 5,
    marginTop: 8,
    height: 70,
    borderRadius: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    color: "darkgrey",
    marginTop: 5
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    marginLeft: 20
  },
})