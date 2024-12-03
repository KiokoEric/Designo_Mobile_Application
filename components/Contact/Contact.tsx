import React from 'react';
import Colors from '../../constants/Colors';
const Circles = require('../../assets/images/CTA.png');
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Contact = () => {
return (
<View style={{ margin: 'auto', width: '85%' }} >
    <ImageBackground source={Circles} style={{  borderRadius: 20, backgroundColor: Colors.Peach, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, paddingVertical: 20, overflow: 'hidden' }}>
        <Text style={{ color: 'white', fontSize: 40, fontFamily: 'JostRegular', paddingHorizontal: 25, textAlign: 'center' }}>Let's talk about your project</Text>
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'JostRegular', paddingHorizontal: 10, textAlign: 'center' }}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, width: 250 }}><Text style={{ fontFamily: 'JostBold', fontSize: 25, textAlign: 'center', textTransform: 'uppercase' }} >Get in touch</Text></TouchableOpacity>
        <Text></Text>
    </ImageBackground>
</View>
)
}

export default Contact

const styles = StyleSheet.create({})