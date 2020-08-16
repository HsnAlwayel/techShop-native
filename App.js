import { StatusBar } from 'expo-status-bar';
import React from 'react';

//Styles
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "styled-components";

// Components
import Home from "./components/Home";
import VendorList from './components/VendorList';
import ProductList from './components/ProductList';

export default function App() {

  const theme = {
    light: {
      text: "Dark Mode",
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      color: "#ff85a2",
    }
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.light}>
        {/* <Home /> */}
        {/* <VendorList /> */}
        <ProductList />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
