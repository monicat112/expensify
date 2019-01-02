import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

// Confused? See Section 11 notes, Controlled Input Filters, Additional Info
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <h3>
            <Link to={`/edit/${id}`}>
                {description}
            </Link>
        </h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            {moment(createdAt).format('MMMM Do, YYYY')}

        </p>
    </div>
)

export default connect()(ExpenseListItem)