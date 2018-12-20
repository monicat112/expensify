import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn() // spy
    const history = { push: jest.fn() } // spy
    const wrapper = shallow(<AddExpensePage onSumbit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    const onSubmit = jest.fn() // spy
    const history = { push: jest.fn() } // spy
    const wrapper = shallow(<AddExpensePage onSumbit={onSubmit} history={history} />)

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    // expect(history.push).toHaveBeenLastCalledWith('/')
    // expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})

