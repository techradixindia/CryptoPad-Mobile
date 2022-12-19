import { StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DummyData from './DummyData'
import PieChart from 'react-native-pie-chart';
import Arrow from "react-native-vector-icons/MaterialIcons"
import Box from "react-native-vector-icons/MaterialCommunityIcons"

const HomeScreen = () => {

  const widthAndHeight = 120
  const series = [10, 90]
  const sliceColor = ['#d2ecf6', '#2196F3']

  const header = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "black", flexDirection: "row", paddingHorizontal: 10, height: 50, borderTopWidth: 1, borderTopColor: "#8a96a1", borderBottomWidth: 1, borderBottomColor: "#8a96a1" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#fff", }}>Equities</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#8a96a1", }}>Cost & G/L per Share</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#8a96a1", }}>Qty, Mkt Val, G/L</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000', paddingHorizontal: 5 }}>
      <StatusBar backgroundColor='#000' barStyle="light-content" hidden={false} />
      <View style={{ flex: 1, backgroundColor: "#131919" }}>
        <Text style={{ fontSize: 24, textAlign: 'center', color: '#8a96a1' }}>Account Value & Day Change</Text>
        <Text style={{ fontSize: 22, textAlign: 'center', color: 'white' }}>$135,112.91</Text>
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#3cbb3d' }}>+$4,872.97 (3.74%)</Text>

        <View style={styles.Chartcontainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#000'} />

          <View style={{ marginLeft: 40, flexDirection: "column" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Box name="checkbox-blank" color={"#d2ecf6"} size={15} />
              <Text style={{ color: "#8a96a1", marginLeft: 20 }}>Total Cash & Cash Investments <Text style={{ fontSize: 18, color: "white" }}>$10,943.68</Text></Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Box name="checkbox-blank" color={"#06b2fb"} size={15} style={{ marginTop: 20, }} />
              <Text style={{ color: "#8a96a1", marginTop: 20, marginLeft: 10 }}>Total Market Value  <Text style={{ fontSize: 18, color: "white" }}>$124,169.23</Text></Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <FlatList
          data={DummyData}
          keyExtractor={item => item.id}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) =>

            <View style={styles.container}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", borderBottomWidth: 1, borderBottomColor: "#8a96a1" }}>
                <Text style={{ fontSize: 18, color: "white" }}>{item.name}</Text>
                <Text style={{ color: "#8a96a1", marginTop: 5 }}>ALMOS GOLD INC</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#8a96a1" }}>
                <Text style={{ color: "white" }}>$8.05</Text>
                <Text style={{ color: "#3cbb3d", marginTop: 5 }}>+$1.99</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", borderBottomWidth: 1, borderBottomColor: "#8a96a1" }}>
                <Text style={{ color: "white" }}>2</Text>
                <Text style={{ color: "white", marginTop: 5, fontSize: 16 }}>$27.86</Text>
                <Text style={{ color: "#3cbb3d", marginTop: 5 }}>+$3.98 (24.72%)</Text>
              </View>
              <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#8a96a1" }}>
                <Arrow name="arrow-forward-ios" size={20} color={"#8a96a1"} />
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
    backgroundColor: "#131919",
    flexDirection: "row",
    paddingHorizontal: 5,
    height: 80,
  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    color: "dark#8a96a1",
    marginTop: 5
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    marginLeft: 20
  },
  Chartcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  title: {
    fontSize: 24,
    margin: 10
  }

})