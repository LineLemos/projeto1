import { View, FlatList, StyleSheet } from "react-native";
import DoorDet from "../components/DoorDet";



const presentes = [
  {
    name: "1 Milhão de Reais",
    image: require("../../assets/DINERO.png"),
  },
  {
    name: "Tristeza e Decepção",
    image: require("../../assets/sad.png"),
  },
  {
    name: "Um Perfume de R$700",
    image: require("../../assets/perfume.png"),
  },
  {
    name: "Um Projeto JS",
    image: require("../../assets/JS.png"),
  },
  {
    name: "Cocô",
    image: require("../../assets/coco.png"),
  },
  {
    name: "joãoX",
    image: require("../../assets/joao.jpeg"),
  },
  {
    name: "Um Livro Dona Benta",
    image: require("../../assets/donaBenta.png"),
  },
];

function Shuffle(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = (Math.floor(Math.random() * (i + 1))[
      (array[i], array[j])
    ] = [array[j], [array[i]]]);
  } return array
}

const portas = [
  {
    id: "1",
    name: "Porta número 1",
    gift: Shuffle([...presentes]),
    image: require('../../assets/portaAmarela.png'),
  },
  {
    id: "2",
    name: "Porta número 2",
    gift: Shuffle([...presentes]),
    image: require('../../assets/portaRosa.png')
  },
  {
    id: "3",
    name: "Porta número 3",
    gift: Shuffle([...presentes]),
    image: require('../../assets/portaVerde.png'),
  },
];

export default function Door() {
  return (
    <View style={styles.container}>
      <FlatList
        data={portas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<DoorDet porta={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    },
});
