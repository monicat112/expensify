import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'


// onfused? See Section 11 notes, Controlled Input Filters, Additional Info
const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>${amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)