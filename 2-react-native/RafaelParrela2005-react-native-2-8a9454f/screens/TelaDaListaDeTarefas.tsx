import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../components/Input";
import ListaDeTarefas from "../components/ListaDeTarefas";
import Titulo from "../components/Titulo";
import BotaoAdicionar from "../components/BotaoAdicionar";

export default function TelaDaListaDeTarefas() {
  const [tarefa, setTarefa] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  };

  return (
    <View style={styles.container}>
      <Titulo texto="Lista de Tarefas" />
      <Input
        value={tarefa}
        onChange={setTarefa}
        placeholder="Informe a tarefa"
      />
      <BotaoAdicionar titulo="Adicionar" onPress={adicionarTarefa} />
      <ListaDeTarefas tarefas={tarefas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
});
