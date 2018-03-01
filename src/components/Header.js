import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () =>{
    return(
        <View style={headerContainer}>
            <Text style={header}> Crypto Currency </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        marginTop :55,
        alignItems : 'center',
        backgroundColor : '#c1000f',
        padding: 14
    },
    header:{
        fontWeight: 'bold',
        fontSize : 20,
        color: '#fff',
    }
})

const {headerContainer, header} = styles

export default Header;

