import React from 'react'
import PilotComponent from './PilotComponent'

class NewShipComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ship: props.ship
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.handleClick()
    console.log(this)
    console.log(event)
  }

  render(){
    const pilots = this.state.ship.pilots.map((pilot, index) => {
      return(<PilotComponent key={index} onClick={this.handleClick} pilot={pilot} ship={this.props.ship} />)
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