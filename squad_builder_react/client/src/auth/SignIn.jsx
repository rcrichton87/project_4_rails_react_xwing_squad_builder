import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.signIn = this.signIn.bind(this)
    this.state = {
      email:"", 
      password:""
    }
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  signIn(event){
    event.preventDefault()
    const req = new AjaxRequest()

    const data = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }

    req.post(this.props.url, JSON.stringify(data), (err, res) => {
      if(!res.error){
        this.props.onSignIn(res)
      }
    })

  }
  
  render() {
    return (
      <form  className='login-form' >
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <button onClick={this.signIn}>  Sign In </button>
      </form>
    )
  }
}

export default SignIn