// import React, { Component } from 'react';
// import { StyleSheet, ScrollView, Text, View, StatusBar } from 'react-native';
// import PieChart from 'react-native-pie-chart';

// const HomeScreen = () => {

//   const widthAndHeight = 120
//   const series = [96, 4]
//   const sliceColor = ['#2196F3', '#FFEB3B',]

//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" />
//       <View style={styles.container}>
//         <Text style={styles.title}>Doughnut</Text>
//         <PieChart
//           widthAndHeight={widthAndHeight}
//           series={series}
//           sliceColor={sliceColor}
//           doughnut={true}
//           coverRadius={0.45}
//           coverFill={'#FFF'}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 24,
//     margin: 10
//   }
// });



import { StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DummyData from './DummyData'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar backgroundColor='#000' barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: '500', color: '#808080' }}>Account Value & Day Change</Text>
        <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: '500', color: 'white' }}>$135,112.91</Text>
        <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: '500', color: '#00A300' }}>+$4,872.97 (3.74%)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <FlatList
          data={DummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <View style={{ flex: 1.5, justifyContent: "center", alignItems: "flex-start" }}>
                <Text style={{ fontSize: 16, color: "white" }}>{item.name}</Text>
                <Text style={{ color: "green", fontWeight: "bold", marginTop: 5 }}>ALMOS GOLD INC</Text>
              </View>
              {/* <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.text1}>Date</Text>
              <Text style={{ color: "white", marginTop: 5 }}>08-14</Text>
            </View> */}
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


    </View>
  )
}

export default HomeScreen

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