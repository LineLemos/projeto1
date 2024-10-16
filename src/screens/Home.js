import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://img.freepik.com/fotos-premium/abra-uma-caixa-de-presente-quadrada-vazia-em-podio-rosa-brilhante-com-espaco-de-copia-de-renderizacao-3d_1346048-60527.jpg?w=360",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.subtitle}>
          Você foi selecionado para ganhar até 1 milhão de reais no nosso
          programa de prêmios lineTech.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Door")}
        >
          <Text style={styles.join}>Participar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 20,
    fontSize: 30,
    textAlign: "center",
    color: "#cd5c5c",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#8b4513",
    textAlign: "center",
    padding: 6,
  },
  join: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 165,
    color: "#fff",
    backgroundColor: "#cd5c5c",
    width: 100,
    height: 40,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 5,
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#ff1493",
    },
  },
  imageBackground: {
    height: 700,
    flex: 1,
  },
});
