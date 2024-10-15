import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function DoorDet({ porta }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { porta })} 
    >
      <Text style={styles.name}>{porta.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "pink",
    fontSize: '30px',
  },
});
