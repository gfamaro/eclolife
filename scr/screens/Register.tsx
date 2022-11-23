import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native";

const Register = () => {
    const navigation = useNavigation()

    const [nome, setNome] = useState()
    const [temperatura, setTemperatura] = useState()
    const [umidade, setUmidade] = useState()

    return (
        <View style={styles.container}>
            <Text style={styles.textCadastrar}>CADASTRAR CHOCADEIRA: </Text>

            <View style={{
                width: '100%',
                height: '60%'
            }}>
                <View>
                    <View style={styles.viewTextTextInput}>
                        <Text style={styles.textTitle}>Nome:</Text>
                        <View style={styles.viewRowTextInput}>
                            <TextInput 
                            style={styles.textInput}/>
                        </View>
                    </View>

                    <View style={styles.viewTextTextInput}>
                        <Text style={styles.textTitle}>Temperatura:</Text>
                        <View style={styles.viewRowTextInput}>
                            <TextInput
                                style={styles.textInput}
                                enablesReturnKeyAutomatically={true}
                                keyboardType={'numbers-and-punctuation'}
                            />
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                width: '20%',
                                borderLeftWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 28,
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                }}>°C</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewTextTextInput}>
                        <Text style={styles.textTitle}>Umidade:</Text>
                        <View style={styles.viewRowTextInput}>
                            <TextInput
                                style={styles.textInput}
                                enablesReturnKeyAutomatically={false}
                                keyboardType={'numeric'}
                            />
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                width: '20%',
                                borderLeftWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 28,
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                }}>%</Text>
                            </View>
                        </View>
                    </View>
                    <Pressable>
                        <Text style={{
                            color: 'grey',
                            alignSelf: 'center',
                            fontWeight: 'bold'
                        }}
                            onPress={() => {
                                navigation.dispatch(CommonActions.navigate({
                                    name: 'Doubts'
                                }))
                            }}
                        >Dúvidas frequentes</Text>
                    </Pressable>
                </View>



            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    backgroundColor: '#6bb155',
                    height: 50,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 20,
                    margin: 10,
                }}
                    onPress={() => { }}
                >
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textCadastrar: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    viewTextTextInput: {
        height: 90,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textInput: {
        width: '80%',
        height: '100%',
        paddingLeft: 10,
        fontSize: 20
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    viewRowTextInput: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 10
    }
})