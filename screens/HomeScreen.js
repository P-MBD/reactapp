import React from "react";
import {View,Text} from 'react-native';
const HomeScreen = (props) =>{
    return(
        <View>
            <Text style={{color:'#fff',fontSize:18, fontFamily:'BYekan'}}>{props.name} </Text>
        </View>
      )
}
export {HomeScreen}