import { View, FlatList } from "react-native";
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
  for (let i = presentes.length - 1; i > 0; --i) {
    const j = (Math.floor(Math.random() * (i + 1))[
      (presentes[i], presentes[j])
    ] = [presentes[j], [presentes[i]]]);
  }
}

const portas = [
  { id: "1", nome: "Porta número 1", gift: Shuffle(presentes) },
  { id: "2", nome: "Porta número 2", gift: Shuffle(presentes) },
  { id: "3", nome: "Porta número 3", gift: Shuffle(presentes) },
];

export default function Door() {
  return (
    <View>
      <FlatList
        data={portas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoorDet porta={item} />}
      />
    </View>
  );
}
