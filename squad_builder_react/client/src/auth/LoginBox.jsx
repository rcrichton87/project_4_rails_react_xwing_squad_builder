import React from 'react'
import SignIn from './SignIn'
import AjaxRequest from '../services/AjaxRequest'

class LoginBox extends React.Component {

  constructor(props){
    super(props)
    this.setUser = this.setUser.bind(this)
    this.state = {
      currentUser: null
    }
  }

  setUser(user){
    this.setState({currentUser: user})
  }

  fetchUser(){
    const req = new AjaxRequest()
    req.get(`${this.props.url}users.json`, (err, user, status) => { 
      if (err) { 
        throw err
      } 

      console.log(user)

      if(status === 200){ 
        this.setState({ 
          currentUser: user 
        })
      } else if(status === 401){ 
        this.setUser(null)
      }
    }) 
  }

  componentDidMount(){
    this.fetchUser()
  }

  render () {
    console.log(this.state.currentUser)
      var mainDiv = <div>
        <h4> Please Sign In/Up </h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
      </div>
      if(this.state.currentUser){
        mainDiv = <div>
          <h4> Welcome {this.state.currentUser.email}</h4>
        </div>
      }
      return (
        <div>
          { mainDiv }
        </div>
      ) 
  }
}

export default LoginBox