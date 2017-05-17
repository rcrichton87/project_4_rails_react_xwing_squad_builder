import React from 'react'
import ShipDetails from '../components/ShipDetails'
import NewShipContainer from '../containers/NewShipContainer'
import Navbar from '../components/Navbar'
import AjaxRequest from '../services/AjaxRequest'
import { Link } from 'react-router-dom'

class SquadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squad: null
    }
    this.deleteShip = this.deleteShip.bind(this)
    this.addShip = this.addShip.bind(this)
    this.fetchSquad = this.fetchSquad.bind(this)
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

 addShip(pilotId, shipId){
   const req = new AjaxRequest()
   req.post("http://localhost:5000/api/squads/"+ this.state.squad.id + "/add_ship/", JSON.stringify({pilot_id: pilotId, ship_id: shipId}), (error, response) => {
     this.fetchSquad()
   })
 }

 deleteShip(pilotedShipId){
  console.log
  const req = new AjaxRequest()
  req.delete("http://localhost:5000/api/squads/" + this.state.squad.id + "/delete_ship/" + pilotedShipId, (error, response) => {
    this.fetchSquad()
  })
 }

  render(){
    if(!this.state.squad){
      return(<div></div>)
    }
    let cost = 0
    const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
      cost += pilotedShip.ship.cost + pilotedShip.pilot.cost
      pilotedShip.applied_upgrades.forEach((applied_upgrade) => {
        cost += applied_upgrade.upgrade.cost
      })
      return(
        <ShipDetails handleDelete={this.deleteShip} squadId={this.state.squad.id} ship={pilotedShip} key={index} />
      )
    })
    return(
      <div>
        <Navbar />
        <div className="squad-view">
          <NewShipContainer addShip={this.addShip} faction={this.state.squad.faction} />
          <div className="ship-list">
            <h1 className="squad-name">{this.state.squad.name} - {cost} points</h1>
            <div>
              {ships}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SquadContainer