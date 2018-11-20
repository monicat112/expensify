import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        Dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>Add expense component (create)</div>
)

const EditExpensePage = () => (
    <div>Edit expense page</div>
)

const HelpPage = () => (
    <div>Help page</div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact="true" />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit-expense" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))