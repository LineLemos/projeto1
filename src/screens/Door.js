import { View, FlatList, StyleSheet } from "react-native";
import DoorDet from "../components/DoorDet";

const presentes = [
  "1 milhão de reais",
  "tristeza e decepção",
  "perfume de 700 reais",
  "um projeto js",
  "cocô",
  "joãoX",
  "livro dona benta",
];

function Shuffle(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = (Math.floor(Math.random() * (i + 1))[
      (array[i], array[j])
    ] = [array[j], [array[i]]]);
  } return array
}

const portas = [
  { id: "1", name: "Porta número 1", gift: Shuffle([...presentes]) },
  { id: "2", name: "Porta número 2", gift: Shuffle([...presentes]) },
  { id: "3", name: "Porta número 3", gift: Shuffle([...presentes]) },
];

export default function Door() {
  return (
    <View>
      <FlatList
        data={portas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<DoorDet porta={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    
});
