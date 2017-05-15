import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import NewShipComponent from '../components/NewShipComponent'

class NewShipContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ships: [],
      selectedPilot: null
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

  handleClick(){
    console.log('click')
  }

  render(){
    const ships = this.state.ships.map((ship, index) => {
      return(<NewShipComponent key={index} ship={ship} handleClick={this.handleClick} />)
    })
    return(
      <div>
        {ships}
      </div>
    )
  }


}

export default NewShipContainer