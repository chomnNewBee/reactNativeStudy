import { View, Text } from 'react-native'
import React from 'react'
const foodCatas = [
    {
        id:1,
        CataName:"坚果类",
        imageSrc:"sfsa"
    },
    {
        id:2,
        CataName:"饮料类",
        imageSrc:"sfsa"
    },
    {
        id:3,
        CataName:"主食",
        imageSrc:"sfsa"
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