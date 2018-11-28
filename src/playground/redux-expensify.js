import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Functions to Genrate Action Objects

const addExpense = (
    { 
        description = '', 
        note = '',
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // spread operator
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        // override the existing expense's values
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        // case 'SET_TEXT_FILTER':
        //     return state.filter((expense) => {
        //         return expense.description.toLowerCase().includes(action.text.toLowerCase())
        //     })
        default:
            return state
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get Visible Expenses

const getVisibleExpenses = (expenses, filters) => {
    return expenses
}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(store.getState()) 
}) 

// Dispatching

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000 }))
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount()) 
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(521))
