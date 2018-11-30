import './styles/styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense }  from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: '4500' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    // Provider needs a prop for the store that you're sharing with the rest of the application
    // provider needs to be set up to use Connect

    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
