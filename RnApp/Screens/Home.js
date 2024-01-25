import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FetchFake } from './FetchFake'
import { screenWidth,screenHeight } from '../CommonFunc/ScreenSize'

const itemSize = screenWidth/3 - 30
var cache = []
export default function Home({navigation}) {
    const [foodCatas,SetFoodCatas] = React.useState([])
    const [inputStr,SetInputStr] = React.useState('')
    React.useEffect(()=>{
        FetchFake("foodCata",(s)=>{
            //console.log(s)
            SetFoodCatas(s)
            cache = s
        }) 
        
    },[])

    const HandleCataPress = (CataId) =>{
        navigation.navigate('HotList',{id:CataId})
    }

    const HandleFoodRender = ({item,index})=>{
        return(
            <View style={styles.flatItemStyle}>
                <TouchableOpacity onPress={()=>HandleCataPress(item.id)}>
                <Image style={styles.ImageStyle} source={item.imageSrc}></Image>
                <Text style={styles.TextStyle}>{item.CataName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const OnSearch = ()=>{
        console.log(cache)
        // const array = cache.map((item,index)=>{
        //     if(item.CataName.includes(inputStr)){
        //         console.log(item.CataName)
        //         return item
        //     }
        //     return
            //console.log(item.CataName)
        // })
        var array = []
        cache.forEach((item,index)=>{
            if(item.CataName.includes(inputStr)){
                console.log(item.CataName)
                array.push(item)
            }
        })
        console.log(array)
        SetFoodCatas(array)
    }
    const OnInputChage = (str)=>{
        SetInputStr(str)
        if(str === ""){
            SetFoodCatas(cache)
        }
    }
    
  return (
    <View>
      <Image style={styles.backImage} source={require('../assets/Home/homeBack.jpg')}></Image>
      <TextInput 
      style={styles.InputStyle} 
      placeholder='please input search content'
      value={inputStr}
      onChangeText={OnInputChage}
      onEndEditing={OnSearch}></TextInput>
      <View style={styles.contentArea}>
        <FlatList numColumns={3} data={foodCatas} renderItem={HandleFoodRender} style={styles.ListStyle} 
        keyExtractor={(item,index)=> item.id}></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backImage:{
        width:screenWidth,
        height:screenHeight/3,
        marginTop:StatusBar.currentHeight
        
    },
    InputStyle:{
        position:"absolute",
        top:screenHeight/3-30,
        backgroundColor:"white",
        left:20,
        right:20,
        borderRadius:3
    },
    contentArea:{
        
        backgroundColor:"#eee",
        height:screenHeight*0.6-30,
        borderRadius:5,
        marginTop:5,
        marginLeft:10,
        marginRight:10
    },
    ListStyle:{
       
    },
    ImageStyle:{
        width:itemSize,
        height:itemSize,
        borderRadius:5

    },
    flatItemStyle:{
        //here we must calc margin of contenArea,this -20 is added by marginLeft:10 and marginRight:10 
        marginLeft:(screenWidth - (itemSize * 3) - 20) / 4,
        marginTop:15
    },
    TextStyle:{
        textAlign:"center",
        height:30,
        lineHeight:30
    }
    
    
})