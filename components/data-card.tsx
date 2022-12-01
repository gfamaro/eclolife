import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type IncubatorProps = {
    item: {
        temperatura: number,
        umidade: number,
        qntOvos: number,
        diasEclo: number
    }
}

const DataCard = ({ item }: IncubatorProps) => {
    const route = useRoute()

    return (
        <View style={styles.viewData}>
            <View style={styles.viewTextData}>
                <Text style={styles.textPrincipal}>Temperatura: </Text>
                {/* @ts-ignore */}
                <Text style={styles.textData}>{item.temperatura}°C</Text>
            </View>

            <View style={styles.viewTextData}>
                <Text style={styles.textPrincipal}>Umidade: </Text>
                {/* @ts-ignore */}
                <Text style={styles.textData}>{item.umidade}%</Text>
            </View>

            <View style={styles.viewTextData}>
                <Text style={styles.textPrincipal}>Qnt. Ovos: </Text>
                {/* @ts-ignore */}
                <Text style={styles.textData}>{item.qntOvos}</Text>
            </View>

            <View style={styles.viewTextData}>
                <Text style={styles.textPrincipal}>Dias p/ eclosão: </Text>
                {/* @ts-ignore */}
                <Text style={styles.textData}>{item.diasEclo}</Text>
            </View>
        </View>
    )

}

export default DataCard

const styles = StyleSheet.create({
    viewData: {
        width: '100%',
        padding: 15,
    },
    viewTextData: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textPrincipal: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textData: {
        fontSize: 26,
    },
})