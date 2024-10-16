import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function DoorDet({ porta }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { porta })}
      >
        <Text style={styles.name}>{porta.name}</Text>
        <Image source={porta.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "black",
  },
  container:{
    backgroundColor: 'pink',
    height: 220,
    
  },
  image:{
    height: 100,
    width: 50,
  }
});
