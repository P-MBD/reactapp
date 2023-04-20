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
    <View style={{flex:1, backgroundColor:'#333', justifyContent:'flex-start',flexDirection:'column', alignItems:'stretch'}}>

     { /*<View  style={{flex:1, height:50, backgroundColor:'red'}}></View>
      <View  style={{flex:3,height:50, backgroundColor:'green'}}></View>*/}
     { /*<Text style={{color:'#fff'}}>Hello React Native Developer </Text>*/}

      <View  style={{ height:50, backgroundColor:'red'}}></View>
      <View  style={{height:50, backgroundColor:'green'}}></View>

    </View>
    )

}




export default App;
