import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import React from 'react';

export default function Details() {
  const route = useRoute();
  const { porta } = route.params;
  const present = porta.gift[Math.floor(Math.random() * porta.gift.length)];

  return (
    <View styles={styles.container}>
      <Text styles={styles.title}>Você ganhou: {present}</Text>
    </View>
  );
}

