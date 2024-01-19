import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.color}>HelloReact Native</Text>
      <Text style = {{fontSize:30}}>hello 233</Text>
      <TextInput style={{backgroundColor:'#1f1'}}>122</TextInput>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color:{
    color:'#f1f'
  }
});
