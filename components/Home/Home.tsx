import React from 'react';
import { StyleSheet, View } from 'react-native';
import Projects from '../Common/Projects/Projects';
const Web = require('../../assets/images/Web-Design.jpg');
const App = require('../../assets/images/App-Design.jpg');
const Graphic = require('../../assets/images/Graphic-Design.jpg');

const Home = () => {
return (
<View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30, marginTop: 35 }} >
    <Projects
        Source={Web}
        Title='Web Design'
    />
    <Projects
        Source={App}
        Title='App Design'
    />
    <Projects
        Source={Graphic}
        Title='Graphic Design'
    />
</View>
)
}

export default Home

const styles = StyleSheet.create({})