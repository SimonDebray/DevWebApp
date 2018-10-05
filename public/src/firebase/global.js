import firebase from 'firebase'

// TODO: Replace with your project's config object
const config = {
  apiKey: 'AIzaSyDehXYVJfhFInggSvKSj2ZVqgD2z0OFCrQ',
  authDomain: 'dev-web-app.firebaseapp.com',
  databaseURL: 'https://dev-web-app.firebaseio.com/'
}

firebase.initializeApp(config)

export default firebase
