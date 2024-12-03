import React from 'react';
const Circle = require('../../../assets/images/Small-Circle.png');
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

interface ValuesProps {
    Source: any,
    Title: string,
    ValueText: string
}

const Values: React.FC<ValuesProps>  = ({ Source, Title, ValueText }) => {
return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, overflow: 'hidden' }}>
        <ImageBackground source={Circle}>
            <Image source={Source} />
        </ImageBackground>
        <Text style={{ color: 'black', fontSize: 25, fontFamily: 'JostRegular', letterSpacing: 10, textAlign: 'center', textTransform: 'uppercase' }} >{Title}</Text>
        <Text style={{ color: 'black', fontFamily: 'JostRegular', fontSize: 16, paddingHorizontal: 20, textAlign: 'center' }} >{ValueText}</Text>
    </View>
    
)
}

export default Values

const styles = StyleSheet.create({})