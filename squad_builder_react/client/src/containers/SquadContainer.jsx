import React from 'react'
import ShipDetails from '../components/ShipDetails'

class SquadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squad: props.squad,
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    if(this.state.expanded){
      const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
        return(
          <ShipDetails ship={pilotedShip} key={index} />
        )
      })
      return(
        <div>
          <div onClick={this.handleClick} className="squad-container">
            <p>{this.state.squad.name}</p>
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
          <p>{this.state.squad.name}</p>
        </div>
      )
    }
  }
}

export default SquadContainer