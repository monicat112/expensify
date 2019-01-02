import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import ExpenseTotal from '../selectors/expenses-total'

export class ExpenseSummary extends React.Component {
    expenseTotalDollars = (expenses) => {
        return (ExpenseTotal(expenses) / 100).toFixed(2)
    }
    render() {
        return (
            <div>
                {this.props.expenses.length > 0 && 
                    <p>
                        You are viewing {this.props.expenses.length}
                        {
                            (this.props.expenses.length !== 1) ? ' expenses ' : ' expense '
                        }
                        with a total value of ${this.expenseTotalDollars(this.props.expenses)}
                    </p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseSummary)