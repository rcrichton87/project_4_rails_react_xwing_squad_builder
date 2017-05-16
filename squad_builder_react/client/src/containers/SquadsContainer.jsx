import React from 'react'
import Navbar from '../components/Navbar'
import SquadListDetails from '../components/SquadListDetails'
import SquadContainer from '../containers/SquadContainer'
import AjaxRequest from '../services/AjaxRequest'
import { Link } from 'react-router-dom'

class SquadsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squads: [],
    }
    this.deleteSquad = this.deleteSquad.bind(this)
  }

  fetchSquads(){
    const req = new AjaxRequest()
    req.get("http://localhost:5000/api/squads", (err, squads, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){
        this.setState({ 
          squads: squads
        })
      }
    }) 
  }

  componentDidMount(){
    this.fetchSquads()
  }

  deleteSquad(event){
    const squad = this.state.squads[event.target.value]
    const req = new AjaxRequest()
    req.delete("http://localhost:5000/api/squads/" + squad.id, (error, response) =>{
      this.fetchSquads()
    })
  }

  render(){
    const squads = this.state.squads.map((squad, index) => {
      return(
        <div className="squad-list-item">
          <SquadListDetails squad={squad} />
          <button value={index} onClick={this.deleteSquad}>x</button>
        </div>
      )
    })

    return(
      <div className="squads-container">
          <Navbar />
          <div className="squads-list">
            {squads}
          </div>
      </div>
    )
  }
}

export default SquadsContainer