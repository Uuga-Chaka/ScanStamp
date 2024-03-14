import { StyleSheet } from 'react-native'

export const colors = {
  red: '#DE204E',
  yellow: '#DEA920',
  blue: '#2173D3',
  green: '#2CC94E',
  black: '#000',
  white: '#fff',
}

export const styles = StyleSheet.create({
  container: { padding: 20 },
  buttonError: { padding: 10, backgroundColor: colors.red, borderRadius: 100, textAlign: 'center' },
  buttonErrorHover: { backgroundColor: colors.black },
  buttonText: { textAlign: 'center', fontSize: 18 },
})
