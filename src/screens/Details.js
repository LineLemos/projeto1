import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
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
        <Text style={styles.title}>Você ganhou: {present}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 700,
    flex: 1,
  },
});