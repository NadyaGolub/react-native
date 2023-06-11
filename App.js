import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./bg.jpg")}>
        <View style={styles.form}>
          <ImageBackground style={styles.im}>
          <View>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              textAlign="center"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
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
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    color: "#f0f8ff",
  },
  form: {
    marginHorizontal: 40,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  im: {
backgroundColor: "#FFFFFF",
  },
});
