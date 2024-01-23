import { View, Text } from 'react-native'
import React from 'react'
const foodCatas = [
    {
        id:1,
        CataName:"Main Food",
        imageSrc:require("../assets/Home/mainfood.jpg")
    },
    {
        id:2,
        CataName:"Egg",
        imageSrc:require("../assets/Home/eggs.png")
    },
    {
        id:3,
        CataName:"Bean",
        imageSrc:require("../assets/Home/bean.jpg")
    },
    {
        id:4,
        CataName:"Cereal",
        imageSrc:require("../assets/Home/cereal.jpg")
    },
    {
        id:5,
        CataName:"Fruit",
        imageSrc:require("../assets/Home/fruit.jpg")
    },
    {
        id:6,
        CataName:"Meat",
        imageSrc:require("../assets/Home/meat.jpg")
    },
    {
        id:7,
        CataName:"Mushroom",
        imageSrc:require("../assets/Home/mushroom.jpg")
    },
    {
        id:8,
        CataName:"Nut",
        imageSrc:require("../assets/Home/nut.jpg")
    },
    {
        id:9,
        CataName:"Oil",
        imageSrc:require("../assets/Home/oil.jpg")
    },
    {
        id:10,
        CataName:"Sauce",
        imageSrc:require("../assets/Home/sauce.png")
    },
    {
        id:11,
        CataName:"Vegetable",
        imageSrc:require("../assets/Home/vegetable.jpg")
    }
]
//this is the function to simulate fetch,because Android 9 and upper versions don't support http request.
//IOS all versions don't supprot eigher.they need https,but I can't deploy a https server.
//First param is the name of api,which will return the data above
//Second param is the callback,provide the data of this api
export function FetchFake(name,callback) {
    setTimeout(() => {
        if(name === "foodCata"){
            callback(foodCatas)
        }
    }, 500);
  
}