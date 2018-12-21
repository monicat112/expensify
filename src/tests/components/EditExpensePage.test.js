import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

// see notes section-12-3-edit-expense.md for explanations

let wrapper, editExpenseMeta, removeExpenseMeta, history

beforeEach(() => {
    editExpenseMeta = jest.fn()
    removeExpenseMeta = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            editExpenseMeta={editExpenseMeta}
            removeExpenseMeta={removeExpenseMeta}
            history={history}
            expense={expenses[2]}
        />
    )
})

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle EditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseMeta).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle RemoveExpenses', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseMeta).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})