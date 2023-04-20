/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Text,
  View,
} from 'react-native';



const App= ()=>{

  return (
    /* <View style={{flex:1, backgroundColor:'#333', justifyContent:'flex-start',flexDirection:'row-reverse'}}>*/
    <View style={{flex:1, backgroundColor:'#333', justifyContent:'flex-start',flexDirection:'row'}}>

     { /*<View  style={{flex:1, height:50, backgroundColor:'red'}}></View>
      <View  style={{flex:3,height:50, backgroundColor:'green'}}></View>*/}
     { /*<Text style={{color:'#fff'}}>Hello React Native Developer </Text>*/}

      <View  style={{flexGrow:1, flexShrink:1, flexBasis:100,  height:50, backgroundColor:'red'}}></View>
      <View  style={{flexGrow:2,flexShrink:2, flexBasis:200,height:50, backgroundColor:'green'}}></View>
      <View  style={{flexGrow:3,flexShrink:0.5, flexBasis:300,height:50, backgroundColor:'blue'}}></View>

    </View>
    )

}




export default App;
