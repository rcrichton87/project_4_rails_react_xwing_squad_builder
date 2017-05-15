import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import NewShipComponent from '../components/NewShipComponent'

class NewShipContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ships: [],
      selectedPilot: null,
      selectedShip: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  fetchShips(){
    const req = new AjaxRequest()
    req.get( "http://localhost:5000/api/ships/", (err, ships, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){
        this.setState({ 
          ships: ships
        })
      }
    }) 
  }

  componentDidMount(){
    this.fetchShips()
  }

  handleClick(pilot, ship){
    this.setState({selectedShip: ship, selectedPilot: pilot})
    console.log('click')
  }

  render(){
    let addShip=<p>Select a Pilot</p>
    if(this.state.selectedPilot && this.state.selectedShip){
      addShip = <form action={"http://localhost:5000/api/squads/" + this.props.squadId + "/add_ship/" + this.state.selectedPilot.id + "/" + this.state.selectedShip.id} method="post">
        <input type="submit" value={"Add " + this.state.selectedPilot.name}/>
      </form>
    }

    const ships = this.state.ships.map((ship, index) => {
      return(<NewShipComponent key={index} ship={ship} handleClick={this.handleClick} />)
    })

    return(
      <div>
        {addShip}
        {ships}
      </div>
    )
  }


}

export default NewShipContainer