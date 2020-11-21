import React from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"
import { connect } from 'react-redux'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  path: string,
  exact: boolean,
  isAuthenticated: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)
