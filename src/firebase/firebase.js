// take all the named exports from the firebase module and dump them into a new variable called firebase
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAaMnJjzPOmfso-2Nd3jpK0Fb32vJR_9m0",
    authDomain: "expensify-dd03b.firebaseapp.com",
    databaseURL: "https://expensify-dd03b.firebaseio.com",
    projectId: "expensify-dd03b",
    storageBucket: "",
    messagingSenderId: "517938564228"
}

firebase.initializeApp(config)

const database = firebase.database()

// database.ref().set({
//     name: 'Monica',
//     location: {
//         city: 'Seattle',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('data\'s synced')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

