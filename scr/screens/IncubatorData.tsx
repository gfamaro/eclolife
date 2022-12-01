import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import DataCard from "../../components/data-card";

const IncubatorData = () => {
  const route = useRoute()

  return (

    <View style={styles.container}>

      <View>
        <View style={styles.viewNameStatus}>
          <Text style={styles.textName}>
            {/* @ts-ignore */}
            {route.params.name}
          </Text>
          <View style={styles.viewStatusColor}>
            <Text style={styles.textStatus}>
              {/* @ts-ignore */}
              {route.params.status}
            </Text>
            <View style={{
              width: 25,
              height: 25,
              borderRadius: 100,
              /* @ts-ignore */
              backgroundColor: route.params.colorStatus,
              borderWidth: 0.5,
              marginLeft: 10,
            }}></View>
          </View>
        </View>

        <View style={styles.viewLine}></View>
      </View>


      <DataCard
        item={{
          /* @ts-ignore */
          temperatura: route.params.temperatura,
          /* @ts-ignore */
          umidade: route.params.umidade,
          /* @ts-ignore */
          qntOvos: route.params.qntOvos,
          /* @ts-ignore */
          diasEclo: route.params.diasEclo
        }} />

      <TouchableOpacity style={styles.button}
        onPress={() => {
          Alert.alert(
            'MODO MANUAL',
            'Você está entrando no modo manual, onde poderá alterar valores ou ativar atuadores. Deseja continuar?',
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          )
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2556/2556974.png' }}
            style={styles.imageAlert}
          />
          <Text style={styles.textManual}>MODO MANUAL</Text>
        </View>

      </TouchableOpacity>

    </View>
  )
}

export default IncubatorData

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    marginBottom: 10,
    marginTop: 20
  },
  textStatus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewNameStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  viewStatusColor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20
  },
  viewLine: {
    backgroundColor: 'black',
    height: 1,
    width: '90%',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 10,
    alignSelf: 'center'
  },
  imageAlert: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  textManual: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  }
})