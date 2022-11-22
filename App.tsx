import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { AppbarContent } from 'react-native-paper/lib/typescript/components/Appbar/AppbarContent';
import StatusCard from './components/status-card';
import { chocadeiras } from './utils/data';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Appbar.Header style={{ backgroundColor: 'black' }}>
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
                  width: 170,
                  alignSelf: 'center',
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

      <StatusBar style="auto" />
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
