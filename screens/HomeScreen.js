import React, {useState} from 'react';
import {View,Text,TouchableOpacity,ScrollView,FlatList, LayoutAnimation, VirtualizedList,TouchableHighlight,TouchableWithoutFeedback,Pressable } from 'react-native';
const HomeScreen = (props) =>{
    const [changeColor, setChangeColor] = useState(false);
    const [countTouch, setCountTouch] = useState(0);
    const dataArray=[
        {
            name:'test1',
            family:'test11'
        },
        {
            name:'test2',
            family:'test22'
        },
        {
            name:'test3',
            family:'test33'
        },
        {
            name:'test4',
            family:'test44'
        },
        {
            name:'test5',
            family:'test55'
        },
        {
            name:'test6',
            family:'test66'
        },
        {
            name:'test7',
            family:'test77'
        },
        {
            name:'test8',
            family:'test88'
        },
        {
            name:'test9',
            family:'test99'
        },
        {
            name:'test10',
            family:'test1010'
        },
    ]
    return(
        <View style={{backgroundColor:'#fff'}}>
            {/*<Text style={{color:'#fff',fontSize:18, fontFamily:'BYekan'}}>{props.name} </Text>
            <View style={{width:50,height:50,backgroundColor: changeColor ? 'blue' : 'red'}}></View>
            <TouchableOpacity onPress={()=>setChangeColor(!changeColor)}>
                <Text>Click Me!</Text>
            </TouchableOpacity>*/}
          {/*  <ScrollView horizontal={false} style={{marginVertical:20}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
            </ScrollView>*/}

           {/* <FlatList keyExtractor={(item,index)=>item.id + index} data={dataArray} renderItem={({item})=>{

                return(
                    <View>
                        <Text >{item.id}</Text>
                        <Text>{item.family}</Text>


                    </View>
                )

            }} numColumns={2}/>*/}

            {/*<VirtualizedList
                data={dataArray}
                keyExtractor={(item,index) => item.id + index}
                renderItem={({item}) => {
                    return(
                        <View><Text>{item.family}</Text></View>
                    )
                }}
                getItemCount={(data) => {return data.length}}
                getItem={(data, index) => {
                    return data[index]
                }}
                horizontal
            /> */}

           {/* <TouchableOpacity onPress={() => {
                setChangeColor(!changeColor)
            }}
            activeOpacity={0.9}
            >
                <Text style={{color : changeColor ? 'red' : 'green'}}>React Native</Text>
            </TouchableOpacity>

            <TouchableHighlight 
                onPress={() => {
                    setCountTouch(countTouch + 1)
                }}

                underlayColor="green"
                activeOpacity={0.9}
            >
                <View style={{backgroundColor : '#ddd'}}>
                    <Text>click me!</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Text>{countTouch}</Text>
            </View>

            
            <TouchableWithoutFeedback
            onPress={() => {
                setCountTouch(countTouch + 1)
            }}
            >
            <View style={{backgroundColor : '#ddd'}}>
                    <Text>click me! feedback</Text>
            </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>{countTouch}</Text>
            </View>*/}

            <Pressable onPress={() => {
                setCountTouch(countTouch + 1)
            }} hitSlop={{top:100}}
            pressRetentionOffset={{bottom : 100}}
            >
                
            <View style={{backgroundColor : '#ddd'}}>
                    <Text>click me! pressbale</Text>
            </View>
            </Pressable>
            <View>
                <Text>{countTouch}</Text>
            </View>
         



        </View>
      )
}
export {HomeScreen}