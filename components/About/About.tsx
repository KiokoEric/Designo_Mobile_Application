import React from 'react';
import Values from '../Common/Values/Values';
import { StyleSheet, Text, View } from 'react-native';
const Friendly = require('../../assets/images/illustration-friendly.png');
const Passionate = require('../../assets/images/illustration-passionate.png');
const Resourceful = require('../../assets/images/illustration-resourceful.png');

const About = () => {
return (
<View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 20, marginBottom: 40 }} >
    <Values 
        Source={Passionate}
        Title='Passionate'
        ValueText='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design and technology into exciting new solutions.'
    />
    <Values 
        Source={Resourceful}
        Title='Resourceful'
        ValueText="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our client's needs."
    />
    <Values 
        Source={Friendly}
        Title='Friendly'
        ValueText='We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    />
</View>
)
}

export default About

const styles = StyleSheet.create({})