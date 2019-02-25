import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import selectExpensesTotal from '../selectors/expenses-total'

// Destructure 3 items from the props object. This gives us easy access the props from below in mapStateToProps
export const ExpensesSummary = ({ expenseCount, expensesTotal, expenseCountHidden }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' 
  const expenseWordsHidden = expenseCountHidden === 1 ? 'expense is' : 'expenses are' 
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        {expenseCountHidden > 0 && (
          <p class="page-header__subtext">{expenseCountHidden} {expenseWordsHidden} hidden by the applied filters</p>
        )}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseCountHidden: (state.expenses.length - visibleExpenses.length),
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)