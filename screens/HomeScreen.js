import React, { useState } from "react";
import {View,Text,TouchableOpacity} from 'react-native';
const HomeScreen = (props) =>{
    const[changeColor,setChangeColor]=useState(false)
    return(
        <View>
            {/*<Text style={{color:'#fff',fontSize:18, fontFamily:'BYekan'}}>{props.name} </Text>*/}
            <View style={{width:50,height:50,backgroundColor: changeColor ? 'blue' : 'red'}}></View>
            <TouchableOpacity onPress={()=>setChangeColor(!changeColor)}>
                <Text>Click Me!</Text>
            </TouchableOpacity>
        </View>
      )
}
export {HomeScreen}