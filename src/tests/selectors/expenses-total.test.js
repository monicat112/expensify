import getExpenseTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expense', () => {
    const res = getExpenseTotal([]) // res = response
    expect(res).toBe(0)
})

test('should correctly add up a single expense', () => {
    const res = getExpenseTotal([ expenses[1] ])
    expect(res).toBe(109500)
})

test('should correctly add up multiple expenses', () => {
    const res = getExpenseTotal(expenses)
    expect(res).toBe(114195)
})
