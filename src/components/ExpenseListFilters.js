import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} 
                />
                {/* value on select is a react thing: https://reactjs.org/docs/forms.html#the-select-tag */}
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => { 
                        if (e.target.value ==='date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value ==='amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
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

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)