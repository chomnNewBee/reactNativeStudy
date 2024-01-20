import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DimentionsExercise() {
  return (
    <View>
      <Text style={styles.itemBase}>dimentionsExercise</Text>
      <Text style={styles.itemBase}>dimentionsExercise</Text>
      <Text style={styles.itemBase}>dimentionsExercise</Text>
      <Text style={styles.itemBase}>dimentionsExercise</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    itemBase:{
        backgroundColor:'red',
        height:Dimensions.get("screen").height/4,
        borderWidth:1,
        borderColor:'yellow'
        

    }
})