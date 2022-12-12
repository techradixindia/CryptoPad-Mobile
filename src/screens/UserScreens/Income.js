import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import CustomSwitch from '../CustomSwitch';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

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
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>
                    </View>
                }
                {switchTab == 2 &&
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Recieved income YTD</Text>
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>
                    </View>
                }
                {switchTab == 3 &&
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Recieved income YTD</Text>
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$658.54</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'white', fontSize: 16 }}>Estimated Income Remaining</Text>
                        <View style={{ flex: 1, backgroundColor: "#202020" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Interest</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$5.98</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 0.5, color: "#C8C8C8", fontSize: 17 }}>5</Text>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Dividents</Text>
                                <Text style={{ flex: 1, color: "#fff", fontSize: 17 }}>$652.54</Text>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ flex: 5, color: "#C8C8C8", fontSize: 17 }}>Received Total</Text>
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