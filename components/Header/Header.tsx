import React from 'react';
const Logo = require('../../assets/images/Logo.png');
import { Image, StyleSheet, View } from 'react-native';
const Burger = require('../../assets/images/icon-hamburger.png');

const Header = () => {
return (
<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 'auto', paddingVertical: 20, width: '95%'}} >
    <Image source={Logo} />
    <Image source={Burger} />
</View>
)
}

export default Header

const styles = StyleSheet.create({})