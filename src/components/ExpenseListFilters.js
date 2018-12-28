import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateProp(startDate)
        this.props.setEndDateProp(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilterProp(e.target.value)
    }
    onSortChange = (e) => { 
        if (e.target.value ==='date') {
            this.props.sortByDateProp()
        } else if (e.target.value ==='amount') {
            this.props.sortByAmountProp()
        }
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                />
                {/* the value on the select is a react-specific thing: https://reactjs.org/docs/forms.html#the-select-tag */}
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilterProp: (text) => dispatch(setTextFilter(text)),
    sortByDateProp: () => dispatch(sortByDate()),
    sortByAmountProp: () => dispatch(sortByAmount()),
    setStartDateProp: (startDate) => dispatch(setStartDate(startDate)),
    setEndDateProp: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
