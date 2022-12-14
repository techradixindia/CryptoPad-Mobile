import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import CustomSwitch from '../CustomSwitch';
import { BarChart, } from "react-native-chart-kit";
import Box from "react-native-vector-icons/MaterialCommunityIcons"

const Income = ({ navigation }) => {
    const [switchTab, setSwitchTab] = useState(1);

    const onSelectSwitch = value => {
        setSwitchTab(value);
    };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000', paddingHorizontal: 10 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <BarChart
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={220}
                    const chartConfig={{
                        backgroundGradientFrom: "blue",
                        backgroundGradientFromOpacity: 1,
                        backgroundGradientTo: "red",
                        backgroundGradientToOpacity: 1,
                        color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false
                    }}
                    style={{ borderRadius: 10, alignSelf: "center" }}
                />
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>$1,028.48</Text>
                    <Text style={{ color: "#8a96a1", fontSize: 16, fontWeight: "400" }}>Total Amount</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ height: 35, marginVertical: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="2021"
                        option2="2022"
                        option3="Next 12 months"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {switchTab == 1 &&

                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Recieved Income YTD</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#06b2fb"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#016b95"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 15 }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Estimated Income Remaining</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#6a7e8e"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#8a96a1"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Estimated Remaining Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                }
                {switchTab == 2 &&
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Recieved Income YTD</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#06b2fb"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#016b95"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 15 }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Estimated Income Remaining</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#6a7e8e"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#8a96a1"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Estimated Remaining Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }
                {switchTab == 3 &&
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Recieved Income YTD</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#06b2fb"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#016b95"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 15 }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Estimated Income Remaining</Text>
                            <View style={{ flex: 1, backgroundColor: "#131919", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#6a7e8e"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$5.98</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Box name="checkbox-blank" color={"#8a96a1"} />
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$652.54</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ flex: 3, color: "#8a96a1", fontSize: 17 }}>Estimated Remaining Total</Text>
                                    <Text style={{ flex: 1.5, textAlign: "right", color: "#fff", fontSize: 17 }}>$658.54</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </ScrollView>
    );
}

export default Income

const styles = StyleSheet.create({


})