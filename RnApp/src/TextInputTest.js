import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function TextInputTest() {
  const[input1,setInput1] = React.useState('')
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} value={input1} onChangeText={(val)=>{
        setInput1(val)
      }
    }
      keyboardType="number-pad"
      secureTextEntry={true}

      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"blue",
        marginHorizontal:10
    }
})