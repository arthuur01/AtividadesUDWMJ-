import { View, Text, StyleSheet } from "react-native";
interface TarefaProps {
  texto: string;
}
export default function Tarefa({ texto }: TarefaProps) {
  return (
    <View style={styles.item}>
      <Text>{texto}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
