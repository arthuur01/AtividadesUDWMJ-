import { View } from "react-native";
import Tarefa from "./Tarefa";
interface ListaDeTarefasProps {
  tarefas: string[];
}
export default function ListaDeTarefas({ tarefas }: ListaDeTarefasProps) {
  return (
    <View>
      {tarefas.map((tarefa, i) => (
        <Tarefa key={i} texto={tarefa} />
      ))}
    </View>
  );
}
