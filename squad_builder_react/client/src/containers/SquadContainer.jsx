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
      squad: null
    }
  }

 fetchSquad(){
   const req = new AjaxRequest()
   req.get( `http://localhost:5000/api/squads/${this.props.match.params .id}`, (err, squad, status) => { 
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

  render(){
    if(!this.state.squad){
      return(<div></div>)
    }
    const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
      return(
        <ShipDetails ship={pilotedShip} key={index} />
      )
    })
    return(
      <div>
        <Navbar />
        <div className="squad-view">
          <NewShipsContainer />
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