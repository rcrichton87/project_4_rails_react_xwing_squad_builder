import React from 'react'
import PilotComponent from './PilotComponent'

class NewShipComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ship: props.ship
    }
  }

  render(){
    const pilots = this.state.ship.pilots.map((pilot, index) => {
      return(<PilotComponent key={index} handleClick={this.props.handleClick} pilot={pilot} ship={this.state.ship} />)
    })

    return(
      <div>
        <p>{this.state.ship.name}</p>
          {pilots}
      </div>
    )
  }

}

export default NewShipComponent