import { Alert, BackHandler, ErrorHandlerCallback } from 'react-native'

const errorHandler: ErrorHandlerCallback = (error, isFatal) => {
  // Log the error to console
  console.error(error)

  if (isFatal) {
    Alert.alert('Unexpected error occurred', 'Please restart the app.', [
      { text: 'OK', onPress: () => BackHandler.exitApp() },
    ])
  } else {
    //Alert.alert('An error occurred', 'Please try again later.')
  }
}

export default errorHandler
