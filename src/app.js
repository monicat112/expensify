import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense }  from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configureStore()

store.dispatch(addExpense({ id: '1', description: 'Water bill', amount: 4500, createdAt: 1545411200874 }))
store.dispatch(addExpense({ id: '2', description: 'Gas bill', createdAt: 1545411200874 }))
store.dispatch(addExpense({ id: '3', description: 'Rent', amount: 109500, createdAt: 1545411200874 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
