import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../CommonFunc/ScreenSize'
import Line from '../CommonFunc/Line'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import storage, { ReadStorage, WriteStorage } from '../CommonFunc/storage'
import DatePicker from 'react-native-modern-datepicker';
import RNPickerSelect from 'react-native-picker-select';

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
            <stack.Screen
            name='EditPersonalStatus'
            component={EditPersonalStatus}
            options={{title:"Edit Personal Status"}}/>
            <stack.Screen
            name='EditSchool'
            component={EditSchool}
            options={{title:"Edit School"}}/>
        </stack.Navigator>
        
    )
}
function EditSchool({navigation}){
    //console.log(navigation)
    const [school,SetSchool] = React.useState('')
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
    },[navigation,school])
    const handleSave = ()=>{
        WriteStorage('school',school)
        navigation.navigate('profile',{school:school})
    }
    return(
        <View style={styles.editStyle}>
            <TextInput 
            placeholder='Input school'
            value={school}
            onChangeText={(str)=>{
                SetSchool(str)
                //console.log(nickname)
            }}/>
            <Line height={2} backgroundColor='#208bff'></Line>
        </View>
    )
}
function EditNickName({navigation}){
    //console.log(navigation)
    const [nickname,setNickname] = React.useState('')
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
        WriteStorage('nickname',nickname)
        navigation.navigate('profile',{nickname:nickname})
    }
    return(
        <View style={styles.editStyle}>
            <TextInput 
            placeholder='Input new nickname'
            value={nickname}
            onChangeText={(str)=>{
                setNickname(str)
                //console.log(nickname)
            }}/>
            <Line height={2} backgroundColor='#208bff'></Line>
        </View>
    )
}
function EditPersonalStatus({navigation}){
    //console.log(navigation)
    const [pStatus,SetPstatus] = React.useState('')
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
    },[navigation,pStatus])
    const handleSave = ()=>{
        WriteStorage('personalStatus',pStatus)
        navigation.navigate('profile',{personalStatus:pStatus})
    }
    return(
        <View style={styles.editStyle}>
            <TextInput 
            placeholder='Input personal status'
            value={pStatus}
            onChangeText={(str)=>{
                SetPstatus(str)
                //console.log(nickname)
            }}/>
            <Line height={2} backgroundColor='#208bff'></Line>
        </View>
    )
}
function ProfilePage({navigation,route}){
    const [nickname_,setNickname] = React.useState("defalut")
    const [pickDate,setPickDate] = React.useState('Unkonwn')
    //this state is used to control datePicker's visible
    const [display,SetDisplay] =React.useState('none')
    const [personalStatus,SetPersonalStatus] = React.useState("Unkonwn")
    const [school_,setSchool] = React.useState("Unkonwn")
    const [dispalyGender,setDisplayGender] = React.useState('none')
    const [gender,setGender] = React.useState('Secret')
    React.useEffect(()=>{
        if(typeof(route.params) != "undefined"){
            const {nickname,personalStatus,school} = route.params
            if(typeof(nickname) != "undefined")
                setNickname(nickname)
            if(typeof(personalStatus) != "undefined")
                SetPersonalStatus(personalStatus)
            if(typeof(school) != "undefined")
                setSchool(school)

        }
    },[route])
    //thie effect is uesd to init from storage,don't need update
    React.useEffect(()=>{
        ReadStorage("nickname").then((ret)=>{
            setNickname(ret)
        })
        ReadStorage("birthday").then((ret)=>{
            setPickDate(ret)
        })
        ReadStorage("personalStatus").then((ret)=>{
            SetPersonalStatus(ret)
        })
        ReadStorage("school").then((ret)=>{
            setSchool(ret)
        })
        ReadStorage('gender').then((ret)=>{
            setGender(ret)
        })
    },[])
    const handleBirthdayPress = ()=>{
        SetDisplay("flex")
    }
    const OnSelectDate = ()=>{
        WriteStorage("birthday",pickDate)
        SetDisplay("none")
    }
    const handleGenderSelect = (gender)=>{
        WriteStorage('gender',gender)
        setGender(gender)
        setDisplayGender('none')
    }
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('EditNickName')}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Nickname</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{nickname_}</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity onPress={()=> setDisplayGender("flex")}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Gender</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{gender}</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity onPress={handleBirthdayPress}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Birthday</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{pickDate}</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity onPress={()=>navigation.navigate("EditPersonalStatus")}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>Personal Status</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{personalStatus}</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>

        <Line></Line>
        <TouchableOpacity onPress={()=>navigation.navigate("EditSchool")}>
        <View style={styles.itemStyle}>
            <Text style={styles.textTitle}>School</Text>
            <View style={styles.dynamicContainer}>
                <Text style={styles.textDynamic}>{school_}</Text>
                <Text style={styles.Arrow}>{">"}</Text>
            </View>
        </View>
        </TouchableOpacity>
        <View style={[styles.DatePickerStyle,{display:display}]}>
        <DatePicker 
        style={{flex:1}}
        onSelectedChange={(date)=>{setPickDate(date)}}
        mode='calendar'/>
        <View style={{backgroundColor:"white"}}>
            <View style={styles.buttionStyle}>
                <Button 
                title='confirm'
                onPress={OnSelectDate}/>
            </View>
        </View>
        </View>


        <View style={[styles.GenderPickerContainer,{display:dispalyGender}]}> 
            <View style={styles.genderForm}>
                <Text style={[styles.genderTitle,{fontSize:20}]}>Gender Select</Text>
                <TouchableOpacity onPress={()=>handleGenderSelect('Male')}>
                    <Text style={styles.genderTitle}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleGenderSelect('Female')}>
                    <Text style={styles.genderTitle}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleGenderSelect('Secret')}>
                    <Text style={styles.genderTitle}>Secret</Text>
                </TouchableOpacity>
            </View>
        </View>

        
      
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
    },
    DatePickerStyle:{
        position:"absolute",
        top:30,
        marginLeft:10,
        marginRight:10,
        width:screenWidth-20,
        height:screenHeight/1.5
    },
    buttionStyle:{
        backgroundColor:"white",
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    },
    GenderPickerContainer:{
        position:"absolute",
        width:screenWidth,
        height:screenHeight,
        top:0,
        left:0,
        backgroundColor:"#c0c0c0c0"

    },
    genderForm:{
        backgroundColor:"white",
        width:200,
        left:(screenWidth-200)/2,
        top:(screenHeight-250)/2
    },
    genderTitle:{
        textAlign:"center",
        marginTop:10,
        marginBottom:10
    }
    
})