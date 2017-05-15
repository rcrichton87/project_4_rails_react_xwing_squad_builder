import React from 'react'

class PilotComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      pilot: this.props.pilot,
      ship: this.props.ship
    }
  }

  render(){
    return(
      <div>
        <p>{this.state.pilot.name} - {this.state.pilot.cost + this.state.ship.cost}</p>
      </div>
    )
  }
}

export default PilotComponent