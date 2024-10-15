import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

export default function Details() {
  const route = useRoute();
  const { porta } = route.params;

  return (
    <View styles={styles.container}>
      <Text style={styles.title}>Presentes: {porta.gift}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});