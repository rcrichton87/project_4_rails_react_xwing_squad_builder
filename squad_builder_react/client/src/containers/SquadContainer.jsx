import React from 'react'
import ShipDetails from '../components/ShipDetails'
import NewShipsContainer from '../containers/NewShipContainer'
import Navbar from '../components/Navbar'
import AjaxRequest from '../services/AjaxRequest'
import { Link } from 'react-router-dom'

class SquadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squad: null,
    }
    this.deleteShip = this.deleteShip.bind(this)
  }

 fetchSquad(){
   const req = new AjaxRequest()
   req.get( `http://localhost:5000/api/squads/${this.props.match.params.id}`, (err, squad, status) => { 
     if (err) { 
       throw err
     } 

     if(status === 200){
       this.setState({ 
         squad: squad
       })
     }
   }) 
 }

 componentDidMount(){
   this.fetchSquad()
 }

 deleteShip(pilotedShipId){
  const req = new AjaxRequest()
  req.delete("http://localhost:5000/api/squads/" + this.state.squad.id + "/delete_ship/" + pilotedShipId, (error, response) => {
    this.fetchSquad()
  })
 }

  render(){
    console.log(this.state.squad)
    if(!this.state.squad){
      return(<div></div>)
    }
    const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
      return(
        <ShipDetails handleDelete={this.deleteShip} squadId={this.state.squad.id} ship={pilotedShip} key={index} />
      )
    })
    return(
      <div>
        <Navbar />
        <div className="squad-view">
          <NewShipsContainer squadId={this.state.squad.id} />
          <div>
            <p>{this.state.squad.name}</p>
            <ul>
              {ships}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SquadContainer