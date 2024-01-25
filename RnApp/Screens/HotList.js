import { ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FetchFoodList } from './FetchFake'
import { screenHeight, screenWidth } from '../CommonFunc/ScreenSize'
const ImageWidth = screenWidth/8

export default function HotList({route}) {
  const [id,SetId] = React.useState(1)
  const [foodList,SetFoodList] = React.useState([])
  const [isLoading,SetLoading] = React.useState(false)
  var isFinishRender = false;
  // there we need put SetId in useEffect, because we need wait this function rendered completely
  //then we update id,this function will be rendered again
  //otherwise,this 
  //console.log(route)
  React.useEffect(()=>{
    if(typeof(route.params) != 'undefined'){
      //console.log("useeffect")
      SetId(route.params.id)
      //console.log(route.params.id)
      SetLoading(true)
      FetchFoodList(route.params.id,(list)=>{
          
          SetFoodList(list)
          SetLoading(false)
      })
    }
    //here
  },[route])

  const handleRenderItem = ({item})=>{
    return(
      <View style={styles.item}>
        <Image
        source={item.foodImage}
        style={styles.imageStyle}/>
        <View style={styles.texts}>
        <Text style={styles.textTitle}>{item.foodName}</Text>
        <Text style={styles.textDetail}>{item.foodDetail}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.contaniner}>
      <ActivityIndicator
       animating={isLoading} 
       style={styles.loadingCircle}
       size={"large"}
       color={"#208bff"}></ActivityIndicator>
      <FlatList style={styles.list} data={foodList} renderItem={handleRenderItem}></FlatList>
    </View>
  )
}


const styles = StyleSheet.create({
  contaniner:{
    width:screenWidth,
    height:screenHeight,
    backgroundColor:"#d3d3d3",
    flex:1
  },
  list:{
    marginTop:StatusBar.currentHeight
  },
  item:{
    width:screenWidth-20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:"white",
    borderRadius:5,
    marginTop:10,
    flexDirection:"row"
  },
  imageStyle:{
    width:ImageWidth,
    height:ImageWidth,
    borderRadius:5,
    marginLeft:3,
    marginBottom:3,
    marginTop:3,
    alignSelf:"center"
    
    
  },
  texts:{
    flexDirection:"column",
    marginLeft:5

  },
  textDetail:{
    fontSize:10,
    width:screenWidth-ImageWidth-20-3-5
  },
  textTitle:{
    fontWeight:"bold",
    
  },
  loadingCircle:{
    position:"absolute",
    top:screenHeight/2-10,
    left:screenWidth/2-10
  }

})