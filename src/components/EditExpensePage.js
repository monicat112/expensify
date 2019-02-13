import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'
import RemoveModal from './RemoveModal'

// see notes/section-12-3-edit-expense.md

export class EditExpensePage extends React.Component {
    state = {
        modalIsOpen: false
    }
    onSubmit = (expense) => {
        this.props.startEditExpenseProp(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = (e) => {
        e.preventDefault()
        this.props.startRemoveExpenseProp({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    handleModalToggle = (e) => {
        e.preventDefault()
        this.setState(() => ({ modalIsOpen: !this.state.modalIsOpen }))
    }
    render () {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.handleModalToggle}>Remove Expense</button>
                </div>

                <RemoveModal 
                    modalIsOpen={this.state.modalIsOpen}
                    handleModalToggle={this.handleModalToggle}
                    onRemove={this.onRemove}
                    expenseName={this.props.expense.description}
                />
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