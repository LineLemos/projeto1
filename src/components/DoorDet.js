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
    color: "indianred",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "lightpink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 217,
  },

  image: {
    height: 170,
    width: 100,
    marginLeft: 27,
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#ff1493",
    },
  },
});
