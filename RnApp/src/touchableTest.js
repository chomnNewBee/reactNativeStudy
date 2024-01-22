import { StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native'
import React from 'react'

export default function TouchableTest() {
  return (
    <View style={styles.container}>
        <TouchableHighlight>
        <View>
        <Text>touchableTest</Text>
        </View>
        </TouchableHighlight>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
})