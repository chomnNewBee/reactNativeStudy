import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenWidth } from '../CommonFunc/ScreenSize'
import Line from '../CommonFunc/Line'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator()
export default function Profile() {
  return (
    <stack.Navigator>
        <stack.Screen
        name="profile"
        component={ProfilePage}
        options={{title:"Profile"}}/>
        <stack.Screen
        name='EditNickName'
        component={EditNickName}
        options={{title:"Edit Nickname"}}/>
    </stack.Navigator>
    
  )
}
function EditNickName(){
    return(
        <View>
            <Text>This is edit page</Text>
        </View>
    )
}
function ProfilePage({navigation,route}){
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('EditNickName')}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Nickname</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>default name</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Gender</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>Secret</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Birthday</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>Unknown</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Personal Status</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>Unknown</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>School</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>Unknown</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>
      
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e3e3e3"
    },
    itemStyle:{
        width:screenWidth,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center"
    },
    textTitle:{
        marginLeft:10,
        marginTop:5,
        marginBottom:5
    },
    textDynamic:{
        marginTop:5,
        marginBottom:5,
        marginRight:10,
        color:"#c0c0c0"
    },
    Arrow:{
        
        marginTop:5,
        marginRight:10,
        fontSize:20,
        lineHeight:20,
        fontWeight:"100",
        color:"#c0c0c0"
    },
    dynamicContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    }
    
})