import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        Dashboard component
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage