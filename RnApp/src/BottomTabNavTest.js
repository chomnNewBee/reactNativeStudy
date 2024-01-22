import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
function HomeScreen(){

    return(
        <View style={styles.container}>
            <Text>I am HomePage</Text>

        </View>
    )

}
function SubPage(){

    return(
        <View style={styles.container}>
            <Text>I am SubPage</Text>
        </View>
    )

}
export default function BottomTabNavTest() {
    const tabNav = createBottomTabNavigator()
    return (
        <tabNav.Navigator>
            <tabNav.Screen name='home' component={HomeScreen}></tabNav.Screen>
            <tabNav.Screen name='sub' component={SubPage}></tabNav.Screen>
        </tabNav.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})