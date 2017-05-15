import React from 'react'
import ShipDetails from '../components/ShipDetails'
import AjaxRequest from '../services/AjaxRequest'
import { Link } from 'react-router-dom'

class SquadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

 fetchSquad(){
  console.log('fetch', this.props)
   const req = new AjaxRequest()
   req.get( `http://localhost:5000/api/squads/${this.props.match.params.id}`, (err, squad, status) => { 
     if (err) { 
       throw err
     } 

     if(status === 200){
       console.log(squad)
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
    if(this.state.expanded){
      const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
        return(
          <ShipDetails ship={pilotedShip} key={index} />
        )
      })

      return(
        <div>
          <div onClick={this.handleClick} className="squad-container">
            <p>squad container</p>
            <p>{this.state.squad.name}</p>
            <Link to={"/" + this.state.squad.id} >Test</Link>
          </div>
          <div>
            <ul>
              {ships}
            </ul>
          </div>
        </div>
      )
    } else {
        return(
         <div onClick={this.handleClick} className="squad-container">
         <p>squad container</p>
          <p>{this.state.squad.name}</p>
        </div>
      )
    }
  }
}

export default SquadContainer