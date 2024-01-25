import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function SearchFind() {
  return (
    <View style={styles.container}>
      <WebView source={{uri:"http://m.meishichina.com/"}}></WebView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    }
})