import React, {useEffect, useState} from 'react';
import {View,Text,TouchableOpacity,ScrollView,FlatList, LayoutAnimation, VirtualizedList,TouchableHighlight,TouchableWithoutFeedback,Pressable,  ActivityIndicator,Modal, StyleSheet,Alert, RefreshControl } from 'react-native';
let page=0;
let count=5;
const HomeScreen = (props) =>{
    const [changeColor, setChangeColor] = useState(false);
    const [countTouch, setCountTouch] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const[refreshing, setRefreshing] = useState(false);
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
    const DATA = [];
    const [isLoading, setIsloading]=useState(true);
    const[item,setItem]=useState([]);
    const[fetchStatus,setFetchStatus]= useState(false);
   
    useEffect(() => {
        setItem([...item, ...dataArray.slice(page, count)]);
        setIsloading(false);
    },[])

    const fetch_data = () => {
        setFetchStatus(true);
        page = count;
        count = count + 5;
        setItem([...item, ...dataArray.slice(page, count)]);
        setFetchStatus(false);
    }
    const FuncAlert = () => {
        Alert.alert(
            'Alert Title',
            'This is a test for Alert',
            [
                {
                    text : 'cancel',
                    onPress:()=> console.log('cancel')
                },
                {
                    text : 'ok',
                    onPress:()=> console.log('cancel')
                },
            ]
        )
       
    }
    const onRefresh= () => {
        setRefreshing(true);
        setTimeout(()=>{
            setRefreshing(false)
        },2000)
    }
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

            {/*<Pressable onPress={() => {
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
            </View>*/}

{/*<FlatList
                data={item}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text>{item.family}</Text>
                        </View>
                    )
                }}
                keyExtractor={(i, index) => i.id + index }
                onEndReached={() => fetch_data()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={() => {
                    return(
                        <ActivityIndicator color="green" size="large" />
                        // <View style={{marginTop : 40}}>
                        //     <TouchableOpacity
                        //     style={{backgroundColor : 'green', borderRadius : 8, width : 100, alignSelf : 'center'}}
                        //         activeOpacity={0.9}
                        //         onPress={() => fetch_data()}
                        //     >
                        //         <Text style={{color : '#fff', textAlign : 'center'}}>More Data!</Text>
                        //     </TouchableOpacity>
                        // </View>
                    )
                }}

            />*/}
         
            {/*<Modal
            animationType='fade'
            visible={showModal}
            transparent={true}
            >
                <View style={styles.mainView}>
                    <View style={styles.secondView}>
                        <Text>This is a Modal in react native</Text>
                    </View>

                     <View style={styles.ModalBottom}>
                        <Pressable onPress={()=>{
                                setShowModal(!showModal)
                        }}>
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>
            
            
                    

            <View>
                <Pressable onPress={FuncAlert}>
                            <Text>show Modal</Text>
                        </Pressable>
            </View> */}

            <ScrollView style={{flex : 1}}
                     refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text>pull screen down</Text>
            </ScrollView>
            

        </View>
      )

   
}
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    ModalBottom:{
        backgroundColor:'green',
        borderRadius:10,
        marginTop:25
    },
    button:{
        padding:15,
        color:'#fff',
        fontSize:16
    },
  })
export {HomeScreen}