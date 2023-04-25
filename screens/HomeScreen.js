import React, { useState } from "react";
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
const HomeScreen = (props) =>{
    const[changeColor,setChangeColor]=useState(false)
    const dataArray=[
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test1',
            family:'test11'
        },
    ]
    return(
        <View style={{backgroundColor:'#fff'}}>
            {/*<Text style={{color:'#fff',fontSize:18, fontFamily:'BYekan'}}>{props.name} </Text>
            <View style={{width:50,height:50,backgroundColor: changeColor ? 'blue' : 'red'}}></View>
            <TouchableOpacity onPress={()=>setChangeColor(!changeColor)}>
                <Text>Click Me!</Text>
            </TouchableOpacity>*/}
            <ScrollView horizontal={false} style={{marginVertical:20}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {
                    dataArray.map((item, index)=>{
                        return(
                            <View key={index}>
                                <Text >{item.name}</Text>
                                <Text>{item.family}</Text>
                            </View>
                        )
                    }

                    )
                }
            </ScrollView>

        </View>
      )
}
export {HomeScreen}