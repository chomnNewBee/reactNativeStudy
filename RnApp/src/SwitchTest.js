import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

export default function SwitchTest() {

  const[val,setVal] = React.useState(false)
  const OnSwich = (value)=>{
    console.log(value)
    setVal(value)
  }

  return (
    <View>
      
      <Switch disabled={false} trackColor={{true:'red',false:'blue'}} value={val} 
      onValueChange={OnSwich}/>
      <StatusBar hidden={val}/>
    </View>
  )
}

const styles = StyleSheet.create({})