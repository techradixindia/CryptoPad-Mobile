import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
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
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <BarChart
                    data={data}
                    width={Dimensions.get('window').width}
                    height={220}
                    const chartConfig={{
                        backgroundGradientFrom: "rgba(255,255,255,1)",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#08130D",
                        backgroundGradientToOpacity: 0.5,
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false
                    }}
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
                        <Text style={{ color: 'white', fontSize: 16 }}>Recieved income YTD</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#06b2fb"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#016b95"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#6a7e8e"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#8a96a1"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>
                    </View>
                }
                {switchTab == 2 &&
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Recieved income YTD</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#06b2fb"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#016b95"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#6a7e8e"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#8a96a1"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>
                    </View>
                }
                {switchTab == 3 &&
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Recieved income YTD</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#06b2fb"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#016b95"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#131919" }}>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#6a7e8e"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Box name="checkbox-blank" color={"#8a96a1"} />
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17, marginLeft: 10 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ flex: 5, color: "#8a96a1", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </View>
    );
}

export default Income

const styles = StyleSheet.create({


})