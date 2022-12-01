import { CommonActions, useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, Text, StyleSheet, Image, Switch, Pressable } from "react-native"


const StatusCard = ({ item }: any) => {
    const navigation = useNavigation()

    const [onOff, setOnOff] = useState('OFF')
    const [colorOnOff, setColorOnOff] = useState('red')

    const dataScreenParams = () => {
        {/* @ts-ignore */ }
        navigation.navigate('Dados', {
            name: item.name,
            temperatura: item.temperatura,
            umidade: item.umidade,
            qntOvos: item.qntOvos,
            diasEclo: item.diasEclo,
            status: onOff,
            colorStatus: colorOnOff
        })
    }

    return (
        <Pressable
            style={styles.container}
            onPress={dataScreenParams}
        >
            <Text style={styles.textName}>{item.name}</Text>
            <View style={styles.viewPrincipal}>

                {/* TEXTOS E DADOS */}
                <View style={styles.viewTextData}>
                    <View style={styles.textNumber}>
                        <Text style={styles.textStats}>TEMPERATURA:</Text>
                        <Text>{item.temperatura}°C</Text>
                    </View>
                    <View style={styles.textNumber}>
                        <Text style={styles.textStats}>UMIDADE:</Text>
                        <Text>{item.umidade}%</Text>
                    </View>
                    <View style={styles.textNumber}>
                        <Text style={styles.textStats}>QUANT. DE OVOS:</Text>
                        <Text>{item.qntOvos}</Text>
                    </View>
                    <View style={styles.textNumber}>
                        <Text style={styles.textStats}>DIAS PARA ECLOSÃO:</Text>
                        <Text>{item.diasEclo}</Text>
                    </View>
                </View>

                {/* IMAGEM ON/OFF */}
                <View style={styles.viewOnOff}>

                    <Text
                        style={styles.textOnOff}
                    >{onOff}</Text>
                    <Switch
                        onChange={() => {
                            if (onOff === 'OFF') {
                                setOnOff('ON')
                                setColorOnOff('green')
                            } else {
                                setOnOff('OFF')
                                setColorOnOff('red')
                            }
                        }}
                        thumbColor={colorOnOff}
                    />
                </View>
            </View>
        </Pressable>
    )
}

export default StatusCard

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 5
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 3
    },
    viewPrincipal: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    textStats: {
        fontWeight: 'bold'
    },
    textNumber: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    viewTextData: {
        height: '100%',
        width: '75%',
        borderRightWidth: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    viewOnOff: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOnOff: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5
    }

})
