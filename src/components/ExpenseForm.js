import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // another way to set the state to the event target's value:
        e.persist()
        this.setState(() => ({ note: e.target.value })) // without persist (above) e doesn't work inside of this callback function
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => { // onDateChange gets called with the date https://github.com/airbnb/react-dates#singledatepicker
        if ( createdAt ) { // this keeps users from clearing the date value
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => { //destructuring the SingleDatePicker's props
        this.setState(() => ({ calendarFocused: focused }))
    }
    // see notes/section-12-3-edit-expense.md, 1. onSubmitProperty(expense)
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide a description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            // this is the onSubmit that we get from either EditExpensePage or AddExpensePage
            this.props.onSubmit({ 
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), // valueOf is a moment.js method
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}
