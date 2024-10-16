import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, ImageBackground, Image} from "react-native";
import React from 'react';


export default function Details() {
  const route = useRoute();
  const { porta } = route.params;
  const present = porta.gift[Math.floor(Math.random() * porta.gift.length)];

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: "https://img.freepik.com/fotos-premium/insignia-de-realizacao-fotorrealista-com-fita-e-trofeu-em-fundo-caprichoso-para-reconhecimento-e_980716-356662.jpg?ga=GA1.1.602148671.1724541044&semt=ais_hybrid",
      }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Você ganhou: {"\n"}{present.name}</Text>
        <Image source={present.image} style={styles.image} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },

  imageBackground: {
    height: 700,
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    backgroundColor: "#db7093",
    gap: 0,
    borderRadius: 6,
    width: 500,
  },

  image: {
    height: 130,
    width: 120,
    borderRadius: 100,
    marginTop: 78,
  },
});