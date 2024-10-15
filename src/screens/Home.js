import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vinde!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Door")}
      >
        <Text>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
