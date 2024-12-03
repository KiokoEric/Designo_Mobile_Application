import React from 'react';
import Colors from '../../constants/Colors';
const Phone = require('../../assets/images/Hero-Phone.png');
const HeroImage = require('../../assets/images/Hero-Home.png');
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Hero = () => {
return (
<View>
    <ImageBackground source={HeroImage} style={{ backgroundColor: Colors.Peach, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 ,paddingTop: 40, }}>
        <Text style={{ color: 'white', fontFamily: 'JostRegular', fontSize: 40, textAlign: 'center' }}>Award-winning custom designs and digital branding solutions</Text>
        <Text style={{ color: 'white', fontFamily: 'JostRegular', fontSize: 20, textAlign: 'center' }}>With over 10 years in the industry. we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, width: 250 }}><Text style={{ fontFamily: 'JostBold', fontSize: 25, textAlign: 'center', textTransform: 'uppercase' }} >Learn More</Text></TouchableOpacity>
        <Image source={Phone} />
    </ImageBackground>
</View>
)
}

export default Hero

const styles = StyleSheet.create({})