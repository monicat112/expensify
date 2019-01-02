import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary.js'

test('should correctly render ExpensesSummarry with 1 expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummarry with multiple expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235998} />)
    expect(wrapper).toMatchSnapshot()
})
