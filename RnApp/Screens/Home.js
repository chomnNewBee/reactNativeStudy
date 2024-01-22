import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FetchFake } from './FetchFake'

export default function Home() {
    const [foodCatas,SetFoodCatas] = React.useState(null)
    React.useEffect(()=>{
        FetchFake("foodCata",(s)=>{
            console.log(s)
            SetFoodCatas(s)
        }) 
        
    },[])

    const HandleFoodRender = ({item,index})=>{
        return(
            <View>
                <Text>{item.CataName}</Text>
            </View>
        )
    }
    
  return (
    <View>
      <Image style={styles.backImage} source={require('../assets/Home/homeBack.jpg')}></Image>
      <TextInput style={styles.InputStyle} placeholder='please input search content'></TextInput>
      <View style={styles.contentArea}>
        <FlatList data={foodCatas} renderItem={HandleFoodRender}></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backImage:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/3,
        marginTop:StatusBar.currentHeight
        
    },
    InputStyle:{
        position:"absolute",
        top:Dimensions.get("window").height/3-30,
        backgroundColor:"white",
        left:20,
        right:20,
        borderRadius:3
    },
    contentArea:{
        
        backgroundColor:"#eee",
        height:Dimensions.get("window").height*0.6-30,
        borderRadius:5,
        marginTop:5,
        marginLeft:10,
        marginRight:10

    }
    
})