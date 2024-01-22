import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from "react";
import { FlexBoxScreen } from './src/flexboxExercise';
import DimentionsExercise from './src/dimentionsExercise';
import ButtonAlert from './src/Button-Alert';
//import StatusBarTest from './src/StatusBarTest.js';
import SwitchTest from './src/SwitchTest';
import LoadingCircle from './src/LoadingCircle';
import ImageTest from './src/ImageTest';
import TextInputTest from './src/TextInputTest';
import TouchableTest from './src/touchableTest';
import ScrollViewTest from './src/ScrollViewTest';
import FlatListDemo from './src/FlatListDemo';
import {NavigationContainer} from "@react-navigation/native"
import StackNavigationTest from './src/StackNavigationTest';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.color}>HelloReact Native</Text>
    //   <Text style = {{fontSize:30}}>hello 233</Text>
    //   <TextInput style={{backgroundColor:'#1f1'}}>122</TextInput>
    //<DimentionsExercise/>
    //<ButtonAlert></ButtonAlert>
    //<LoadingCircle/>
    //<ImageTest></ImageTest>
    // <TextInputTest></TextInputTest>
    // <ScrollViewTest></ScrollViewTest>
    <NavigationContainer>
      <StackNavigationTest></StackNavigationTest>
    </NavigationContainer>


    // </View>
  )
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
