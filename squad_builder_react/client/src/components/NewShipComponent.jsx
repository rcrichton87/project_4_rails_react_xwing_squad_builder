import React from 'react'
import PilotComponent from './PilotComponent'

class NewShipComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ship: props.ship,
      expanded: true
    }
    this.handleClick = this.handleClick.bind(this)  
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    if(this.state.expanded){
      const pilots = this.state.ship.pilots.map((pilot, index) => {
        return(<PilotComponent key={index} handleClick={this.props.handleClick} pilot={pilot} ship={this.state.ship} />)
      })
      return(
        <div>
          <p className="ship-name" onClick={this.handleClick}>{this.state.ship.name}</p>
            {pilots}
        </div>
      )
    } else {
      return(
        <div>
          <p className="ship-name" onClick={this.handleClick}>{this.state.ship.name}</p>
        </div>
      )
    }
    
  }

}

export default NewShipComponent