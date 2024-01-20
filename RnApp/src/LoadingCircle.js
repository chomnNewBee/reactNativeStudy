import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoadingCircle() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"black"} animating={true} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
        

    }
})