import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  isAuthenticated: boolean;
}> = (props) => {


  return props.isAuthenticated ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
    (<Redirect to="/login" />)
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)
