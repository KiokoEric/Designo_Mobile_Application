import * as Font from 'expo-font';
import Hero from '@/components/Hero/Hero';
import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Contact from '@/components/Contact/Contact';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const _layout = () => {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "JostBold": require('../assets/fonts/Jost-Bold.ttf'),
      "JostRegular": require('../assets/fonts/Jost-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>  
        <ScrollView>
          <Header />
          <Hero />
          <Home />
          <About />
          <Contact />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default _layout

const styles = StyleSheet.create({
})