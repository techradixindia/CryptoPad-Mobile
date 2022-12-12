import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    option3,
    onSelectSwitch,
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };

    return (
        <View
            style={{
                flex: 1,
                height: 35,
                backgroundColor: '#282828',
                borderRadius: 10,
                borderColor: '#e4e4e4',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#707070' : '#282828',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: getSelectionMode == 1 ? 'white' : '#e4e4e4',
                        fontSize: 14,
                        fontFamily: 'Roboto-Medium',
                    }}>
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#707070' : '#282828',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: getSelectionMode == 2 ? 'white' : '#e4e4e4',
                        fontSize: 14,
                        fontFamily: 'Roboto-Medium',
                    }}>
                    {option2}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(3)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 3 ? '#707070' : '#282828',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: getSelectionMode == 3 ? 'white' : '#e4e4e4',
                        fontSize: 14,
                        fontFamily: 'Roboto-Medium',
                    }}>
                    {option3}
                </Text>
            </TouchableOpacity>
        </View>
    );
}