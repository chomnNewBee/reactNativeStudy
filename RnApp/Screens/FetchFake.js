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
const detailFoodList = [
    {
        id:1,
        CataName:"Main Food",
        foodList:[
            {
                foodId:1,
                foodName:"Rice",
                foodImage:require('../assets/HotList/rice.jpg'),
                foodDetail:"Cooked rice refers to rice that has been cooked either by steaming or boiling. The terms steamed rice or boiled rice are also commonly used. Any variant of Asian rice (both Indica and Japonica varieties), African rice or wild rice, glutinous or non-glutinous, long-, medium-, or short-grain, of any colour, can be used. Rice for cooking can be whole grain or milled."
            },
            {
                foodId:2,
                foodName:"Noodle",
                foodImage:require('../assets/HotList/ChineseNoodles.jpg'),
                foodDetail:"Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. Noodles are a staple food in many cultures (for example, Chinese noodles, Filipino noodles, Indonesian noodles, Japanese noodles, Korean noodles, Vietnamese noodles, and long and medium length Italian pasta) and made into a variety of shapes."
            }
        ]
    },
    {
        id:2,
        CataName:"Egg",
        foodList:[
            {
                foodId:1,
                foodName:"Egg",
                foodImage:require('../assets/HotList/egg.jpg'),
                foodDetail:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches."
            },
            {
                foodId:2,
                foodName:"Duck Egg",
                foodImage:require('../assets/HotList/duckegg.jpg'),
                foodDetail:"Duck eggs are eggs from ducks that can be eaten as food. The shell has a white color. It slightly looks taller than chicken eggs. It is also cooked the same way as chicken eggs."
            },
            {
                foodId:3,
                foodName:"Quail Egg",
                foodImage:require('../assets/HotList/aniyEgg.jpg'),
                foodDetail:"Quail eggs are a kind of eggs as food, eaten and considered a delicacy in many parts of the world, including Asia, Europe, and North America. In Japanese cuisine, they are sometimes used raw or cooked as tamago in sushi and often found in bento lunches."
            }
        ]
    },
    {
        id:3,
        CataName:"Bean",
        foodList:[
            {
                foodId:1,
                foodName:"Soybean",
                foodImage:require('../assets/HotList/Soybean.jpg'),
                foodDetail:"The soybean (or soya bean) is a plant with fruit called beans, from Eastern Asia. The height of a grown soybean is between less than 20 centimetres and up to 2 metres. One soybean lives for only one year."
            },
            {
                foodId:2,
                foodName:"Adzuki bean",
                foodImage:require('../assets/HotList/Azuki_Beans.jpg'),
                foodDetail:"The azuki bean is a type of reddish-brown colored bean. It can also be spelled adzuki. The bean is grown in East Asia and the Himalayas. It is often boiled in sugar to make a red bean paste. "
            }
        ]
    },
    {
        id:4,
        CataName:"Cereal",
        foodList:[
            {
                foodId:1,
                foodName:"Wheat",
                foodImage:require('../assets/HotList/wheat.jpg'),
                foodDetail:"Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum "
            },
            {
                foodId:2,
                foodName:"Oryza sativa",
                foodImage:require('../assets/HotList/oryzaSativa.jpg'),
                foodDetail:"Oryza sativa, also known as rice, is the plant species most commonly referred to in English as rice. It is the type of farmed rice whose cultivars are most common globally, and was first domesticated in the Yangtze River basin in China 13,500 to 8,200 years ago"
            }
        ]
    },
    {
        id:5,
        CataName:"Fruit",
        foodList:[
            {
                foodId:1,
                foodName:"Apple",
                foodImage:require('../assets/HotList/apple.jpeg'),
                foodDetail:"An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). "
            },
            {
                foodId:2,
                foodName:"Banana",
                foodImage:require('../assets/HotList/banana.jpg'),
                foodDetail:"A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3"
            }
        ]
    },
    {
        id:6,
        CataName:"Meat",
        foodList:[
            {
                foodId:1,
                foodName:"Pork",
                foodImage:require('../assets/HotList/pork.jpg'),
                foodDetail:"Pork is meat that comes from pigs. It is the most commonly consumed meat in the world[1] Evidence of pig husbandry dates back to 5000 BC."
            },
            {
                foodId:2,
                foodName:"Beef",
                foodImage:require('../assets/HotList/beef.jpg'),
                foodDetail:"Beef is a type of meat that comes from cattle. Beef could also include meats from other bovines. There are different types of beef. Beef is popular in the United States."
            }
        ]
    },
    {
        id:7,
        CataName:"Mushroom",
        foodList:[
            {
                foodId:1,
                foodName:"Shiitake mushroom",
                foodImage:require('../assets/HotList/Shiitake_Lentinula_edodes.jpg'),
                foodDetail:"The shiitake mushroom, or simply called (Lentinus edodes or Lentinula edodes) is also known as Chinese black mushroom or black forest mushroom.["
            },
            {
                foodId:2,
                foodName:"Straw mushroom",
                foodImage:require('../assets/HotList/StrawMushroom.jpg'),
                foodDetail:"Volvariella volvacea (also known as paddy straw mushroom or straw mushroom) is a species of edible mushroom cultivated throughout East and Southeast Asia and used extensively in Asian cuisine."
            }
        ]
    },
    {
        id:8,
        CataName:"Nut",
        foodList:[
            {
                foodId:1,
                foodName:"Walnut",
                foodImage:require('../assets/HotList/Walnut.jpg'),
                foodDetail:"the fruit is eaten and can be used to make oil. The fruit of Juglans are called walnuts. "
            },
            {
                foodId:2,
                foodName:"Peanut",
                foodImage:require('../assets/HotList/peanut.jpg'),
                foodDetail:"A peanut is a plant in the legume family, Fabaceae. It is native to South America, Central America and Mexico."
            }
        ]
    },
    {
        id:9,
        CataName:"Oil",
        foodList:[
            {
                foodId:1,
                foodName:"Olive oil",
                foodImage:require('../assets/HotList/Oliven_V1.jpg'),
                foodDetail:"Olive oil is a vegetable oil. It is made by getting the juice of the fruits of the olive tree. These are called olives. "
            },
            {
                foodId:2,
                foodName:"Sesame oil",
                foodImage:require('../assets/HotList/Sesame_oil.jpg'),
                foodDetail:"Sesame oil is an edible vegetable oil derived from sesame seeds. The oil is one of the earliest-known crop-based oils."
            }
        ]
    },
    {
        id:10,
        CataName:"Sauce",
        foodList:[
            {
                foodId:1,
                foodName:"Salt",
                foodImage:require('../assets/HotList/salt.png'),
                foodDetail:"In common usage, salt is a mineral composed primarily of sodium chloride (NaCl). "
            },
            {
                foodId:2,
                foodName:"Vinegar",
                foodImage:require('../assets/HotList/vinegar.jpg'),
                foodDetail:"inegar is an aqueous solution of acetic acid and trace compounds that may include flavorings. "
            }
        ]
    },
    {
        id:11,
        CataName:"Vegetable",
        foodList:[
            {
                foodId:1,
                foodName:"Carrot",
                foodImage:require('../assets/HotList/carrot.jpg'),
                foodDetail:"he carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in color, though heirloom variants including purple, black, red, white, and yellow cultivars exist,[2][3][4] all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. "
            },
            {
                foodId:2,
                foodName:"Spinach",
                foodImage:require('../assets/HotList/spinach.jpg'),
                foodDetail:"Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and Western Asia. "
            }
        ]
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
/**
 * fetch the food list by id
 * @param {*} id this is catagoey id 
 * @param {*} callback when fetch complete,call this callback
 */
export function FetchFoodList(id, callback){
    setTimeout(() => {
        const obj = detailFoodList.find((item)=> item.id == id)
        callback(obj.foodList)
    }, 700);
}