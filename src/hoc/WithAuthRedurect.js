import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth,
})

export default function WithAuthRedurect(Component) {
  class RedirectComponent extends React.Component {
    render() {
        if (this.props.isAuth === false && <Navigate to={'/login'}/>)
        return <Component {...this.props} />
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}
