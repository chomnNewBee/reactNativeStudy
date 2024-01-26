import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Line({height=1,backgroundColor="#e3e3e3"}) {
  return (
    <View style={{height:height,backgroundColor:backgroundColor}} ></View>
  )
}

