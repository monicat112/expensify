import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})

// these are all async actions, signInWithPopup returns a promise

export const googleStartLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const githubStartLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider)
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}