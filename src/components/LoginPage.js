import React from 'react'
import { connect } from 'react-redux'
import { googleStartLogin, githubStartLogin } from '../actions/auth'

// destructuring the props to get googleStartLogin
export const LoginPage = ({ googleStartLogin, githubStartLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Track your expenses</p>
            <div className="button-group-blocks">
                <button className="button" onClick={googleStartLogin}>Login with Google</button>
                <button className="button" onClick={githubStartLogin}>Login with Github</button> 
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    // ? why exactly do we need to dispatch the startlogin actions? check notes?
    googleStartLogin: () => dispatch(googleStartLogin()),
    githubStartLogin: () => dispatch(githubStartLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)