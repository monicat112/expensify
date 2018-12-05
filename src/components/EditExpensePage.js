import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense)
                }} 
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)