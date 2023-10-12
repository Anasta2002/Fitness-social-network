import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
          {!this.state.editMode ? 
            <span onDoubleClick={() => {this.activateEditMode.bind(this)}}>{this.props.status}</span> : 
            <span><input onBlur={this.deactivateEditMode.bind(this)} autoFocus value={this.props.status} /></span>}
      </div>
    )    
  }
}

export default ProfileStatus;