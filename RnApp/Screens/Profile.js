import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenWidth } from '../CommonFunc/ScreenSize'
import Line from '../CommonFunc/Line'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

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
function EditNickName({navigation,route}){
    //console.log(navigation)
    const [nickname,setNickname] = React.useState()
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return(
                <TouchableOpacity onPress={handleSave}>
                    <View style={styles.SaveButton}>
                        <Text style={{marginTop:15}}>Save</Text>
                    </View>
                </TouchableOpacity>
                )
            }
        })
    },[navigation,nickname])
    const handleSave = ()=>{
        console.log(nickname)
        navigation.navigate('profile',{nickname:nickname})
    }
    return(
        <View style={styles.editStyle}>
            <TextInput 
            placeholder='Input new nickname'
            value={nickname}
            onChangeText={(str)=>{
                setNickname(str)
                console.log(nickname)
            }}/>
            <Line height={2} backgroundColor='#208bff'></Line>
        </View>
    )
}
function ProfilePage({navigation,route}){
    const [nickname,setNickname] = React.useState("defalut")
    React.useEffect(()=>{
        const {nickname} = route.params
        if(typeof(nickname) != "undefined")
            setNickname(nickname)
    },[route])
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('EditNickName')}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Nickname</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{nickname}</Text>
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
    },
    editStyle:{
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    SaveButton:{
        flex:1,
        justifyContent:"center"
    }
    
})