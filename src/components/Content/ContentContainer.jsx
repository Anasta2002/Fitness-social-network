import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { getUsersProfile } from '../../redux/contentPage_reducer'
import { Navigate } from 'react-router-dom'
import WithAuthRedurect from '../../hoc/WithAuthRedurect'
// import { withRouter } from 'react-router'

class ContentContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    this.props.getUsersProfile(userId);
  }

  render() {
    return (
      <div>
        <Content
          {...this.props}
          profile={this.props.profile}
        />
      </div>
    )
  }
}

let AuthRedirectComponent = WithAuthRedurect(ContentContainer)

let mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth,
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state) => ({
  profile: state.contentPage.profile,
})

// let withURLdataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUsersProfile })(AuthRedirectComponent)

// export default compose(
//   connect(mapStateToProps, { getUsersProfile }),
//   WithAuthRedurect
// )(ContentContainer)