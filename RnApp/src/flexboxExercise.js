import React from "react";
import { View ,Text, SafeArea, StyleSheet, SafeAreaView} from "react-native";

export function FlexBoxScreen(){
    return(
    <SafeAreaView>
    <View style={[styles.container]}>
        <Text>i am flex box</Text>
        <Text>i am flex box2</Text>
        <Text>i am flex box3</Text>
    </View>
    <View style={[styles.container,styles.flexColumnReverse]}>
        <Text>i am flex box</Text>
        <Text>i am flex box2</Text>
        <Text>i am flex box3</Text>
    </View>
    <View style={[styles.container,styles.flexRow]}>
        <Text>i am flex box  </Text>
        <Text>i am flex box2  </Text>
        <Text>i am flex box3  </Text>
    </View>
    <View style={[styles.container,styles.flexRowReverse]}>
        <Text>i am flex box  </Text>
        <Text>i am flex box2  </Text>
        <Text>i am flex box3  </Text>
    </View>
    </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container:{
        margin:20

    },
    flexColumnReverse:{
        flexDirection:'column-reverse'
    },
    flexRow:{
        flexDirection:"row"
    }
    ,
    flexRowReverse:{
        flexDirection:"row-reverse"
    }

})