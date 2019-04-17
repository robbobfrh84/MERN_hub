import React, { Component } from 'react'
import LogIn from "../LogIn/logIn.js"
import LogOut from "../LogOut/logOut.js"
import SignUp from "../SignUp/signUp.js"
import API from "../../utils/API.js"
import "./home.sass"

class Home extends Component {

  constructor(){
    super()
    this.state = {
      username: null,
      _id: null,
      response: "* ... API will respond here ... *"
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    console.log("📜check for logged in session user" )
    API.getUser()
      .then( resp => {
        if (resp.data.user) {
          const message = "Session Log In Successful for "+resp.data.user.username
          this.updateUser(resp.data.user, message)
        } else {
          this.setState({response: "No Session User Logged In"})
        }
      })
      .catch( err => console.log(err))
    this.setState({response: "Get user request sent..."})
  }

  logIn = (user, message) => {
    console.log('👌log IN: user: ', user)
    API.logIn(user)
      .then( resp => {
        if (!resp.data._Id && !resp.data.username) {
          alert(resp.data.message)
          this.setState({response: "Try Again..."})
        } else {
          this.updateUser(resp.data, message || "Logged In")
        }
      })
      .catch( err => this.setState({response: err.response.data}))
    this.setState({response: "Log In request sent..."})
  }

  logOut = () => {
    console.log('✌️log OUT: user: ', this.state.username)
    API.logOut()
      .then( resp => this.updateUser(resp.data, "Logged Out") )
      .catch( err => this.setState({response: err.response.data}) )
    this.setState({response: "Log Oout request sent..."})
  }

  signUp = (newUser) => {
    console.log('👆NEW sign UP: newUser: ', newUser)
    API.signUp(newUser)
      .then( resp => {
        if (resp.data.errors) {
          alert(resp.data.errors)
          this.setState({response: "Try Again..."})
        } else {
          this.logIn(newUser, "Successful Sign Up")
        }
      })
      .catch( err => console.log(err))
    this.setState({response: "Sign Up request sent..."})
  }

  updateUser(data, message){
    this.setState({
      response: message || data.message,
      username: data.username,
      _id:  data._id
    })
  }

  render() {
    return (
      <div className="home">

        <div className="header">
          MERN + Passport Native Login Example
        </div><hr />

        <div className='singin-up'>

          {!this.state._id && <>

            <LogIn
              logIn={this.logIn}
            /><hr />

            <SignUp
              signUp={this.signUp}
            /><hr />

          </>}

          {this.state._id && <>

            <LogOut
              logOut={this.logOut}
              username={this.state.username}
            /><hr />

          </>}

          <div className="response">
            {this.state.response}
          </div>

        </div>

      </div>
    )
  }
}

export default Home
