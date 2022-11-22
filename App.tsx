import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import StatusCard from './components/status-card';
import { chocadeiras } from './utils/data';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Appbar.Header style={{ backgroundColor: 'black', alignItems: 'center' }}>
          <Appbar.BackAction
            onPress={() => { }}
            iconColor='white'
          />
          <Appbar.Content
            title={
              <Image
                source={require('../eclolife/utils/índice.jpeg')}
                style={{
                  height: 50,
                  width: 150,
                }}
              />
            }
          />
        </Appbar.Header>
      </View>
      <Text style={styles.textChocadeirasCadastradas}>CHOCADEIRAS CADASTRADAS:</Text>

      <FlatList
        data={chocadeiras}
        renderItem={({ item }: any) => (
          <StatusCard
            item={item}
          />)}
      />

      <TouchableOpacity style={{
        backgroundColor: '#6bb155',
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 20,
        margin: 10
      }}
        onPress={() => {

        }}
      >
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'white',
        }}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textChocadeirasCadastradas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  appHeader: {
    backgroundColor: '#184DB8',
    height: 30,
    alignItems: 'flex-start',
  },

});
