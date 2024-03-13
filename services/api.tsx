import database from '@react-native-firebase/database'

const dbRef = database().ref('/api/')

const get = async (url: string) => await dbRef.child(url).once('value')
const post = async <T,>(url: string, value: T) => await dbRef.child(url).set(value)
const remove = async (url: string) => await dbRef.child(url).remove()
const update = async <T,>(url: string, value: { [key: string]: T }) =>
  await dbRef.child(url).update(value)

const api = { post, get, remove, update }

export default api
