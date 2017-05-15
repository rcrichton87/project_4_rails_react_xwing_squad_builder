import React from 'react'
import Navbar from '../components/Navbar'
import SquadContainer from '../containers/SquadContainer'
import AjaxRequest from '../services/AjaxRequest'

class SquadsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squads: []
    }
  }

  fetchSquads(){
    const req = new AjaxRequest()
    req.get("http://localhost:5000/api/squads", (err, squads, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){
        console.log(squads)
        this.setState({ 
          squads: squads
        })
      }
    }) 
  }

  componentDidMount(){
    this.fetchSquads()
  }

  render(){
    const squads = this.state.squads.map((squad, index) => {
      return( <SquadContainer squad={squad} key={index} /> )
    })

    return(
      <div className="squads-container">
          <Navbar />
          {squads}
      </div>
    )
  }
}

export default SquadsContainer