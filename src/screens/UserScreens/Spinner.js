import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import React from 'react'

const Spinner = (props) => {
    return (

        <Modal transparent={true}
            animationType={'fade'}
            visible={props.isLoading}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000060' }}>
                <Image source={require('../../assets/images/loader-unscreen.gif')} style={{ height: 80, width: 80 }} />
            </View>
        </Modal>
    )
}

export default Spinner

const styles = StyleSheet.create({})
