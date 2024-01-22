import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatListDemo() {
    const array = [
        {
            id:1,
            title:"hello"
        },
        {
            id:2,
            title:"hello2"
        },
        {
            id:3,
            title:"hello3"
        },
        {
            id:4,
            title:"hello"
        },
        {
            id:5,
            title:"hello"
        },
        {
            id:6,
            title:"hello"
        },
        {
            id:7,
            title:"hello"
        },
        {
            id:8,
            title:"hello"
        },
        {
            id:9,
            title:"hello"
        },
        {
            id:10,
            title:"hello"
        },
        {
            id:11,
            title:"hello"
        },
    ]
    return (
    <View>
      <FlatList data={array} renderItem={({item,index})=>{
        return (
            <View><Text>{item.title}</Text></View>
        )
        
      }}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})