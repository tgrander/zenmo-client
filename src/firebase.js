import firebase from 'firebase'
import firestore from 'firebase/firestore'


// initialize firebase with config

const config = {
    apiKey: 'AIzaSyCFPewesJRgBv_Q6cYykthNipoOfCWcHb4',
    authDomain: 'zenmo-7c62a.firebaseapp.com',
    databaseURL: 'https://zenmo-7c62a.firebaseio.com',
    projectId: 'zenmo-7c62a',
    storageBucket: '',
    messagingSenderId: '991854308142'
}

firebase.initializeApp(config)


// firebase services

export const db = firebase.firestore()

export const database = firebase.database()

export const auth = firebase.auth()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
