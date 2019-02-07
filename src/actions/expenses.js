import database from '../firebase/firebase'

// Functions to Genrate Action Objects

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    // thunked actions are called with dispatch AND getState
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '',
            amount = 0, 
            createdAt = 0 
        } = expenseData
        const expense = { description, note, amount, createdAt } 
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// Remove Expense
export const startRemoveExpense = ({ id = {} }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Edit Expense
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        // the return lets us do things in expenses.test when startEditExpense is completed
        // otherwise we wouldn't have a way of knowing when this is done
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Set Expense
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    // Override all the expenses in the redux store with the Firebase ones
    expenses
})

// need to read from the users expense list, not the root expense list

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}