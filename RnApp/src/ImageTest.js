import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageTest() {
  return (
    <View style={{justifyContent:"center",flex:1}}>
      <Image source={require("../assets/minimap.jpg")}
      style={styles.imageItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    imageItem:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").width
    }
})