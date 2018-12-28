import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

// see notes section-12-3-edit-expense.md for explanations

let wrapper, editExpenseProp, removeExpenseProp, history, asdf

beforeEach(() => {
    editExpenseProp = jest.fn()
    removeExpenseProp = jest.fn()
    history = { push: jest.fn() }
    asdf = 'hello'
    wrapper = shallow(
        <EditExpensePage 
            editExpenseProp={editExpenseProp}
            removeExpenseProp={removeExpenseProp}
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
    expect(editExpenseProp).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle RemoveExpenses', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseProp).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})