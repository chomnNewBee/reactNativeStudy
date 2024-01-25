import { Image, StyleSheet} from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import Home from './Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HotList from './Screens/HotList'
import SearchFind from './Screens/SearchFind';
import Profile from './Screens/Profile';


export default function App() {
  const tab = createBottomTabNavigator()
  const HandleScreenOption = ({route})=>{
    return {
      tabBarIcon:({focused,size,color})=>{
        let icon
        if(route.name === "Home"){
          if(focused){
            icon = require("./assets/Icons/home.png")
          }
          else{
            icon = require("./assets/Icons/home-outline.png")
          }
        }
        else if(route.name === "HotList"){
          if(focused){
            //HotList.HandleCataParam(route)
            icon = require("./assets/Icons/list.png")
          }
          else{
            icon = require("./assets/Icons/list-outline.png")
          }
        }
        else if(route.name === "Search"){
          if(focused){
            //HotList.HandleCataParam(route)
            icon = require("./assets/Icons/search.png")
          }
          else{
            icon = require("./assets/Icons/search-outline.png")
          }
        }
        else if(route.name === "Profile"){
          if(focused){
            //HotList.HandleCataParam(route)
            icon = require("./assets/Icons/person.png")
          }
          else{
            icon = require("./assets/Icons/person-outline.png")
          }
        }
        return <Image style={{width:size,height:size,tintColor:color}} source={icon}></Image>
      }
    }
  }

  return (
    
    <NavigationContainer>
      <tab.Navigator 
      screenOptions={HandleScreenOption}>
        <tab.Screen
        name='Home' 
        component={Home}
        options={{header:()=>{}}}>
        </tab.Screen>
        <tab.Screen 
        name='HotList' 
        component={HotList}
        options={{header:()=>{}}}>
        </tab.Screen>
        <tab.Screen
        name='Search'
        component={SearchFind}
        options={{header:()=>{}}}></tab.Screen>
        <tab.Screen
        name='Profile'
        component={Profile}
        options={{header:()=>{}}}></tab.Screen>
      </tab.Navigator>
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
