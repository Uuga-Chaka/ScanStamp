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
  alertContainer: {
    margin: 40,
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  alertText: { flex: 1, marginLeft: 10, color: colors.black },
})
