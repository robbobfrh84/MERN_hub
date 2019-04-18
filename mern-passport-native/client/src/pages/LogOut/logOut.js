import React, { Component } from 'react'
import "./logOut.sass"

class LogIn extends Component {

  submit = () => {
    this.props.logOut()
  }

  render(){
    return (
      <div className="logout">
        Logged in as ({this.props.username}) 👉
        <button
          className="btn"
          onClick={this.submit}
        >
          Log Out
        </button>
      </div>
    )
  }
}

export default LogIn
