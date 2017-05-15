import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AjaxRequest from '../services/AjaxRequest'

class SquadsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squads: []
    }
  }

  fetchSquads(){
    const req = new AjaxRequest()
    req.get("http://localhost:5000/api/squads", (err, squads, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){
        console.log(squads)
        this.setState({ 
          squads: squads
        })
      }
    }) 
  }

  componentDidMount(){
    this.fetchSquads()
  }

  render(){
    const squads = this.state.squads.map((squad) => {
      return( <p>{squad.name}</p> )
    })

    return(
      <div className="squads-container">
          <Navbar />
          <p>Squads go here</p>
          {squads}
      </div>
    )
  }
}

export default SquadsContainer