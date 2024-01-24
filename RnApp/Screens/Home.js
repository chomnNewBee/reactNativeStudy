import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FetchFake } from './FetchFake'
import { screenWidth,screenHeight } from '../CommonFunc/ScreenSize'

const itemSize = screenWidth/3 - 30
export default function Home() {
    const [foodCatas,SetFoodCatas] = React.useState(null)
    React.useEffect(()=>{
        FetchFake("foodCata",(s)=>{
            //console.log(s)
            SetFoodCatas(s)
        }) 
        
    },[])

    const HandleFoodRender = ({item,index})=>{
        return(
            <View style={styles.flatItemStyle}>
                <Image style={styles.ImageStyle} source={item.imageSrc}></Image>
                <Text style={styles.TextStyle}>{item.CataName}</Text>
            </View>
        )
    }
    
  return (
    <View>
      <Image style={styles.backImage} source={require('../assets/Home/homeBack.jpg')}></Image>
      <TextInput style={styles.InputStyle} placeholder='please input search content'></TextInput>
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