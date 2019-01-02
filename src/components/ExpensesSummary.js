import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import selectExpensesTotal from '../selectors/expenses-total'

// Destructure two items from the props object. This gives us access the props from below in mapStateToProps
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
      <div>
        <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
      </div>
    );
  };

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)