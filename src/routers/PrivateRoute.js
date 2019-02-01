import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component/>
)

// we don't need to dispatch anything, but we do need to grab some values like whether the user is authenticated
const mapStateToProps = (state) => ({
    // how do we know state.auth.uid has the info?... is it... becuase the componenet is connected and our global state has that info?...
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)