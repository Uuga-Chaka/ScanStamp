import database from '@react-native-firebase/database'

if (__DEV__) database().useEmulator('http://10.0.2.2', 9000)
const dbRef = database().ref('/api/')

const get = async <T,>(url: string): Promise<T> => {
  const snapshot = await dbRef.child(url).once('value')
  return snapshot.val() as T
}
const post = async <T,>(url: string, value: T) => await dbRef.child(url).set(value)
const remove = async (url: string) => await dbRef.child(url).remove()
const update = async <T,>(url: string, value: { [key: string]: T }) =>
  await dbRef.child(url).update(value)

const api = { post, get, remove, update }

export default api
