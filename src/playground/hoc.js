import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <p>The secret info is: {props.info}</p>
    </div>
)

const wihtAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <WrappedComponent {...props} />
            {props.isAdminUser && <p>Danger Will Robinson!</p>}
            <p>{props.info}</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>Welcome</h1>
            {props.isAuthenticated ? (
                /* We use the spread operator ... to pass the props into the wrapped component*/
                <WrappedComponent {...props} />
            ) : ( 
                <p>You have no power here!</p>
            )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

const AdminInfo = wihtAdminWarning(Info)

// ReactDOM.render(<AdminInfo info="This is the info" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="You are a codfish" />, document.getElementById('app'))
