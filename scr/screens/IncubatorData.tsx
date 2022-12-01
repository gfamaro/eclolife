import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IncubatorData = () => {
    const route = useRoute()

    return (
        
        <View style={styles.container}>
            <View style={styles.viewNameStatus}>
                <Text style={styles.textName}>
                    {/* @ts-ignore */}
                    {route.params.name}
                </Text>
                <View style={styles.viewStatusColor}>
                    <Text style={styles.textName}>
                        {/* @ts-ignore */}
                        {route.params.status}
                    </Text>
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        /* @ts-ignore */
                        backgroundColor: route.params.colorStatus,
                        borderWidth: 0.5,
                        marginLeft: 10,
                    }}></View>
                </View>
            </View>

            <View style={styles.viewData}>
                <View style={styles.viewTextData}>
                    <Text style={styles.textPrincipal}>Temperatura: </Text>
                    {/* @ts-ignore */}
                    <Text style={styles.textData}>{route.params.temperatura}</Text>
                </View>

                <View style={styles.viewTextData}>
                    <Text style={styles.textPrincipal}>Umidade: </Text>
                    {/* @ts-ignore */}
                    <Text style={styles.textData}>{route.params.umidade}</Text>
                </View>

                <View style={styles.viewTextData}>
                    <Text style={styles.textPrincipal}>Qnt. Ovos: </Text>
                    {/* @ts-ignore */}
                    <Text style={styles.textData}>{route.params.qntOvos}</Text>
                </View>

                <View style={styles.viewTextData}>
                    <Text style={styles.textPrincipal}>Dias p/ eclosão: </Text>
                    {/* @ts-ignore */}
                    <Text style={styles.textData}>{route.params.diasEclo}</Text>
                </View>
            </View>

        </View>
    )
}

export default IncubatorData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10
    },
    viewTextData: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    viewData: {
        width: '100%',
        padding: 15,
        marginTop: 20
    },
    textPrincipal: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textData: {
        fontSize: 30,
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    viewNameStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    
    viewStatusColor: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})