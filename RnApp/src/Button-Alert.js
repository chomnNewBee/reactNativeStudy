import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonAlert() {
  return (
    <View>
        <Button
        title='alertWithOneButton'
        onPress={()=>Alert.alert("hello")}
        color={"red"}
        accessibilityLabel='hello'
        />
        <Button 
        title='alertWithThreeButton'
        onPress={()=>{
            Alert.alert('警告',"我们遇到了一个意料之外的问题！",
            [
                {
                    text:"wait",
                    onPress:()=>{console.log('wait')},
                    
                },
                {
                    text:"ok",
                    onPress:()=>{console.log('ok')},
                    
                },
                {
                    text:"cancel",
                    onPress:()=>{console.log('cancel')},
                    
                }
                ,
               
            ],
            {cancelable:false})
        }}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({})