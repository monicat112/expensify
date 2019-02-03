import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({ 
    isAuthenticated,
    // we get the component data from the prop, then rename it with a capital C
    // because we render it as an actual componenet later
    component: Component,
    ...rest
}) => (
    // ? how does the function in component have access to props?... does this come from rest?
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
)

// we don't need to dispatch anything, but we do need to grab some values like whether the user is authenticated
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)