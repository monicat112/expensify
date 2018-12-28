// Get Expense Total

export default (expenses) => {
    // see notes/section-13-reduce.md
    const reducer = (accumulator, currentValue) => accumulator + currentValue.amount
    return expenses.reduce(reducer, 0) // equals 114195
}