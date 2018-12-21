import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense (Create)</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// mapDispatchToProps defines props that call dispatch
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)