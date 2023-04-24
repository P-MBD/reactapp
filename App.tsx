
import React from 'react';
import {Text,View} from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
const App= ()=>{
  const name="ali"
  return (
    /* <View style={{flex:1, backgroundColor:'#333', justifyContent:'flex-start',flexDirection:'row-reverse'}}>*/
    <View style={{flex:1, backgroundColor:'#333', justifyContent:'center', alignItems:'center',flexDirection:'row'}}>

      {/*<View  style={{ flexGrow:1,flexShrink:1,flexBasis:100,height:50, backgroundColor:'red'}}></View>
      <View  style={{flexGrow:2, flexShrink:2,flexBasis:200,height:50, backgroundColor:'green'}}></View>
      <View  style={{flexGrow:3, flexShrink:1,flexBasis:300,height:50, backgroundColor:'blue'}}></View>
      
       <Text style={{color:'#fff',fontSize:18, fontFamily:'BYekan'}}>سلام آموزش React Native </Text>*/}

      {/*<View  style={{flexGrow:1, flexShrink:1, flexBasis:100,  height:50, backgroundColor:'red'}}></View>
      <View  style={{flexGrow:2,flexShrink:2, flexBasis:200,height:50, backgroundColor:'green'}}></View>
    <View  style={{flexGrow:3,flexShrink:0.5, flexBasis:300,height:50, backgroundColor:'blue'}}></View>*/}

      <HomeScreen name="React Native" />

    </View>
    )

}
export default App;
