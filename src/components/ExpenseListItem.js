import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'

// Confused? See Section 11 notes, Controlled Input Filters, Additional Info
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3>
            <Link to={`/edit/${id}`}>
                {description}
            </Link>
        </h3>
        <p>${amount} - {createdAt}</p>
    </div>
)

export default connect()(ExpenseListItem)