import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Alert, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../components/config/config";


const Register = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [temp, setTemp] = useState('')
  const [umid, setUmid] = useState('')
  const [qntOvos, setQntOvos] = useState('')

  // SUBMIT DATA
  function create() {
    addDoc(collection(db, "chocadeiras"), {
      nome: name,
      temp: temp,
      umid: umid,
      qntOvos: qntOvos,
      realUmid: null,
      realTemp: null,
      diasEclo: null
    }).then(() => {
      // DATA SAVED SUCCESSFULLY
      console.log('DADOS REGISTRADOS COM SUCESSO')
      setName('') 
      setTemp('')
      setUmid('')
      setQntOvos('')
      Alert.alert(
        'CHODAEIRA CADASTRADA',
        'Sua chocadeira foi cadastrada com sucesso.',
        [
          {
            text: "OK",
            onPress: () => {},
          }
        ]
      )
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.textCadastrar}>CADASTRAR CHOCADEIRA: </Text>

      {/* TEXT INPUT NAME */}
      <View style={styles.viewInputButton}>
        <View>
          <View style={styles.viewTextTextInput}>
            <Text style={styles.textTitle}>Nome:</Text>
            <View style={styles.viewRowTextInput}>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(val) => {
                  setName(val)
                }}
              />
            </View>
          </View>

          {/* TEXT INPUT TEMPERATURE */}
          <View style={styles.viewTextTextInput}>
            <Text style={styles.textTitle}>Temperatura:</Text>
            <View style={styles.viewRowTextInput}>
              <TextInput
                style={styles.textInput}
                enablesReturnKeyAutomatically={true}
                keyboardType={'numeric'}
                value={temp}
                onChangeText={(val) => {
                  setTemp(val)
                }}
              />
              <View style={styles.viewCelsiusPercent}>
                <Text style={styles.textCelsiusPercent}>°C</Text>
              </View>
            </View>
          </View>

          {/* TEXT INPUT MOISTURE */}
          <View style={styles.viewTextTextInput}>
            <Text style={styles.textTitle}>Umidade:</Text>
            <View style={styles.viewRowTextInput}>
              <TextInput
                style={styles.textInput}
                enablesReturnKeyAutomatically={true}
                keyboardType={'numeric'}
                value={umid}
                onChangeText={(val) => {
                  setUmid(val)
                }}
              />
              <View style={styles.viewCelsiusPercent}>
                <Text style={styles.textCelsiusPercent}>%</Text>
              </View>
            </View>
          </View>

          {/* TEXT INPUT EGGS */}
          <View style={styles.viewTextTextInput}>
            <Text style={styles.textTitle}>Quantidade de ovos: </Text>
            <View style={styles.viewRowTextInput}>
              <TextInput
                style={styles.textInput}
                keyboardType={'numeric'}
                value={qntOvos}
                onChangeText={(val) => {
                  setQntOvos(val)
                }}
              />
            </View>
          </View>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <Pressable>
            <Text style={styles.textQuestion}
              onPress={() => {
                navigation.dispatch(CommonActions.navigate({
                  name: 'Dúvidas'
                }))
              }}
            >Dúvidas frequentes</Text>
          </Pressable>

          {/* CHECKBOX */}
          <View style={styles.viewCheckbox}>
            <BouncyCheckbox
              onPress={(isChecked: boolean) => {
                if (isChecked === true) {
                  /* @ts-ignore */
                  setTemp('37.5')
                  /* @ts-ignore */
                  setUmid('80')
                } 
              }}
              fillColor='#6bb155'
              unfillColor='#fff'
              textStyle={{
                color: 'black',
              }}

            />
            <Text>Preencher campos com valores padrões</Text>
          </View>

        </View>

        {/* BUTTON */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity style={styles.buttonRegister}
            onPress={() => {
              create()
            }}
          >
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
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
    marginTop: 15,
    alignSelf: 'center'
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
  },
  buttonRegister: {
    backgroundColor: '#6bb155',
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 10,
  },
  viewInputButton: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  textButton: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  viewCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35
  },
  textQuestion: {
    color: 'grey',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textCelsiusPercent: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  viewCelsiusPercent: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '20%',
    borderLeftWidth: 1
  }

})