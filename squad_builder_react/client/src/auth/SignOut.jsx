import React from 'react'
import { Link } from 'react-router-dom'
import AjaxRequest from '../services/AjaxRequest'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }
  
  signOut(event){
    const req = new AjaxRequest()
    req.delete(this.props.url, (err, status) => {
      if(err) { throw err }
      if(status === 204){ 
        this.props.onSignOut(null)
      }
    })
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default SignOut