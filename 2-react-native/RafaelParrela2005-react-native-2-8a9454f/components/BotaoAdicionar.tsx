import { Button, View, StyleSheet } from 'react-native'

interface BotaoAdicionarProps {
  onPress: () => void
  titulo: string
}

export default function BotaoAdicionar({ onPress, titulo }: BotaoAdicionarProps) {
  return (
    <View style={styles.botao}>
      <Button title={titulo} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  botao: {
    marginVertical: 10,
  },
})
