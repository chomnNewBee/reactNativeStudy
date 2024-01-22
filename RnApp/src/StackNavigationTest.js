import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen({navigation}){

    return(
        <View style={styles.container}>
            <Text>I am HomePage</Text>
            <Button title='Click me to jump to subPage'
            onPress={()=> navigation.navigate('Sub')}></Button>

        </View>
    )

}
function SubPage({navigation}){

    return(
        <View style={styles.container}>
            <Text>I am SubPage</Text>
            <Button title='Click me to jump to HomePage'
            onPress={()=> navigation.navigate('Home')}></Button>

        </View>
    )

}
export default function StackNavigationTest() {
    const StackNav = createNativeStackNavigator()

    return (
        <StackNav.Navigator>
            <StackNav.Screen name='Home' component={HomeScreen}></StackNav.Screen>
            <StackNav.Screen name='Sub' component={SubPage}></StackNav.Screen>

        </StackNav.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})