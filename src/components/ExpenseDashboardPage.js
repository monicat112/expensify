import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        Dashboard component
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage