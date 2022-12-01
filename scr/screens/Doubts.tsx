import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Doubts = () => {
    return(
        <View style={styles.container}>
            <Text>DÚVIDAS FREQUENTES</Text>
        </View>
    )
}

export default Doubts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})