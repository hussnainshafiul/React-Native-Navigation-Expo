import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'


export default function  ListItem({photo,title, subTitle , isFree, price,onPress}) {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        marginBottom : 20
    }}>
    <View style={{flexDirection:'row', alignItems: 'center', flex: 1}}>
    <Image source={photo}
    style ={{
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8
    }}
    />
    <View>
        <Text
        style={{
        color: '#333',
        fontSize : 14
        }}>{subTitle} </Text>
        <Text 
        style={{
        color: '#333',
        fontSize : 14,
        textTransform: 'uppercase'
         }}
        >{title} </Text>
    </View>
    </View>
    <TouchableOpacity
    onPress={onPress}
    style = {{
        backgroundColor: '#0aada8',
        padding : 10,
        width : 100,
        borderRadius: 10
    }}>
        <Text style ={{
            color : '#fff',
            textAlign: 'center',
            fontSize: 14
        }}>

        {isFree == 'Yes' && 'Play'}
        {isFree == 'No' && price}

        </Text>
    </TouchableOpacity>
    </View>
  )
}