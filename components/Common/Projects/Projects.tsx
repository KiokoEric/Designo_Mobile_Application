import React from 'react';
const Arrow = require('../../../assets/images/icon-right-arrow.png');
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

interface ProjectProps {
    Source: any
    Title: string,
}

const Projects: React.FC<ProjectProps>  = ({ Source, Title }) => {
return (
    <View>
        <ImageBackground source={Source} style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 350, height: 250, overflow: 'hidden' }} imageStyle={{ borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 30, fontFamily: 'JostRegular', textAlign: 'center', textTransform: 'uppercase' }}>{Title}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:10 }}><Text style={{ color: 'white', fontFamily: 'JostRegular', letterSpacing: 5, textAlign: 'center', textTransform: 'uppercase' }} >View Projects</Text><Image source={Arrow} /></View>
        </ImageBackground>
    </View>
    
)
}

export default Projects

const styles = StyleSheet.create({})