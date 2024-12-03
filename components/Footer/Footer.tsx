import React from 'react';
import Colors from '../../constants/Colors';
const Logo = require('../../assets/images/Logo-Light.png');
import { Image, StyleSheet, Text, View } from 'react-native';
const YouTube = require('../../assets/images/icon-youtube.png');
const Twitter = require('../../assets/images/icon-twitter.png');
const Facebook = require('../../assets/images/icon-facebook.png');
const Pinterest = require('../../assets/images/icon-pinterest.png');
const Instagram = require('../../assets/images/icon-instagram.png');

const Footer = () => {
return (
<View style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, paddingVertical: 25 }}>
    <View style={{ borderBottomWidth: 2, borderColor: Colors.Grey, }} >
        <Image source={Logo} style={{ paddingBottom: 10 }} />
    </View>
    <Text style={{ color: 'white', fontFamily: 'JostRegular', marginBottom: 10, textTransform: 'uppercase', textAlign: 'center' }} >Our Company</Text>
    <Text style={{ color: 'white', fontFamily: 'JostRegular', marginBottom: 10, textTransform: 'uppercase', textAlign: 'center' }} >Locations</Text>
    <Text style={{ color: 'white', fontFamily: 'JostRegular', marginBottom: 10, textTransform: 'uppercase', textAlign: 'center' }} >Contact</Text>
    <View>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostBold', marginBottom: 10, textAlign: 'center' }} >Designo Central Office</Text>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostRegular', marginBottom: 10, textAlign: 'center' }} >3886 Wellington Street</Text>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostRegular', marginBottom: 10, textAlign: 'center' }} >Toronto, Ontario M9C 3J5</Text>
    </View>
    <View>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostBold', marginBottom: 10, textAlign: 'center' }}>Contact Us (Central Office)</Text>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostRegular', marginBottom: 10, textAlign: 'center' }}>P: + 1 253-863-8967</Text>
        <Text style={{ color: Colors.Grey, fontFamily: 'JostRegular', marginBottom: 10, textAlign: 'center' }}>M: contact@design.co</Text>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }} >
        <Image source={YouTube} />
        <Image source={Facebook} />
        <Image source={Twitter} />
        <Image source={Pinterest} />
        <Image source={Instagram} />
    </View>
</View>
)
}

export default Footer

const styles = StyleSheet.create({})