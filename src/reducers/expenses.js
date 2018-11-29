// Expenses Reducer

const expensesReducerDefaultState = []

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
export default (state = expensesReducerDefaultState, action) => {
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
        default:
            return state
    }
}
