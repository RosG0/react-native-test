import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route }) {
    // const loadScene = () => {
    //     navigation.goBack();
    // };
    return (
        <View style={globalStyle.main}>
            <Image style={stlyes.image} source={{uri: route.params.img}}/>
            <Text style={globalStyle.title}>{route.params.name}</Text>
            <Text style={stlyes.description}>{route.params.description}</Text>
        </View>
    ) 
}

const stlyes = StyleSheet.create({
    description: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 16,
        color: '#474747'
    },
    image: {
        width: '60%',
        height: 200
    }
});