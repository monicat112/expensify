import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses }  from './actions/expenses'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app')) // when startSetExpenses succeeds, we render the application
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log('uid', user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => { // startSetExpenses returns a promise
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})