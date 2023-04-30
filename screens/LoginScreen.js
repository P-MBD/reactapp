import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image, StatusBar, Pressable} from 'react-native';

const LoginScreen = () => {
    return(
<View style={{flex:1}}>
    <View style={styles.firstStyle}>
        <Image source={require('../assets/images/logo.png')} />
    </View>
    <View style={styles.secondStyle}>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>Welcome</Text>
    </View>
    <View style={styles.thirdStyle}>
        <TextInput 
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email"
        style={styles.textInput}
        />
        <TextInput 
        textContentType="password"
        keyboardType="decimal-pad"
        placeholder="Password"
        style={[styles.textInput,{marginTop:15}]}
        />
        <Pressable style={styles.pressStyle}>
          <Text style={{color : '#fff', fontSize : 16}}>Log-In</Text>
        </Pressable>
    </View>
</View>
    )
}
const styles = StyleSheet.create({
    firstStyle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#81c784'
    },

    secondStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 30,
        marginBottom : 40,
    },

    thirdStyle : {
        flex : 2,
        justifyContent : 'flex-start',
        alignItems : 'center'
    },

    textInput : {
        width : '90%',
        borderRadius : 7,
        backgroundColor : '#cfd8dc'
    },

    pressStyle : {
        width : '90%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 7,
        backgroundColor : '#388e3c',
        marginTop : 30,
        padding : 10
    }
})

export {LoginScreen}