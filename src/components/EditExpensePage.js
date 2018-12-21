import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { removeExpense, editExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmitProperty = (expense) => {
        // use the dispatching prop and give it the id and the expense to use
        this.props.editExpenseMeta(this.props.expense.id, expense)
        // then go to the home page
        this.props.history.push('/')
    }
    onRemoveProperty = () => {
        // use the dispatching prop and give it the expense to use
        this.props.removeExpenseMeta({ id: this.props.expense.id })
        // then go to the home page
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <ExpenseForm 
                    // give the expense to our form 
                    expense={this.props.expense}
                    // tell the form what function to run when it's submitted
                    onSubmit={this.onSubmitProperty}
                />
                {/* remove the element */}
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
    // named these "Meta" just to disinguish them from the actions with similar names
    editExpenseMeta: (id, expense) => dispatch(editExpensePage(id, expense)),
    removeExpenseMeta: (data) => dispatch(removeExpense(data))
})

// connect the EditExpensePage to our state props and dispatching props
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)