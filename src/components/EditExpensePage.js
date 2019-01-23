import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'

// see notes/section-12-3-edit-expense.md

export class EditExpensePage extends React.Component {
    onSubmitProperty = (expense) => {
        this.props.startEditExpenseProp(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemoveProperty = () => {
        this.props.startRemoveExpenseProp({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmitProperty}
                />
                <button onClick={this.onRemoveProperty}>Remove</button>
            </div>
        )
    }
}

// get an expense that matches our url id from the store
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

// create any props that use dispatch
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpenseProp: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpenseProp: (data) => dispatch(startRemoveExpense(data))
})

// connect the EditExpensePage to our state props and dispatching props
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)