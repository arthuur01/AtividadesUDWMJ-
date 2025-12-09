import { Text, StyleSheet } from 'react-native'

interface TituloProps {
  texto: string
}

export default function Titulo({ texto }: TituloProps) {
  return <Text style={styles.titulo}>{texto}</Text>
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
})
