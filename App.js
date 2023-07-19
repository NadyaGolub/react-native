import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import {useRoute} from "./Screens/router";





export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  const routing = useRoute({})

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./bg.jpg")}>
        <NavigationContainer>
          {routing}
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
