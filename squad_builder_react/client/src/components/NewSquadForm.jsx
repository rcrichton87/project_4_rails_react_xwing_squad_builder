import React from 'react'
import Navbar from './Navbar'
import AjaxRequest from '../services/AjaxRequest'

class NewSquadForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
      squadName: null,
      selectedFaction: "Rebel"
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleTextChange(event){
    this.setState({squadName: event.target.value})
  }

  handleRadioButtonChange(event){
    this.setState({selectedFaction: event.target.value})
  }

  submitForm(){
    let squad
    if(this.state.currentUser && this.state.squadName && this.state.selectedFaction){
      squad = {squad: {name: this.state.squadName, faction: this.state.selectedFaction, user_id: this.state.currentUser.id} }
      const req = new AjaxRequest()
      req.post("http://localhost:5000/api/squads", JSON.stringify(squad), (err, response) =>{
        window.location.replace("http://localhost:3000/#/squads/show/" + response.id)
      })
    } 
  }

  fetchUser(){
    const req = new AjaxRequest()
    req.get("http://localhost:5000/users.json", (err, user, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){ 
        this.setState({ 
          currentUser: user 
        })
      } 
    }) 
  }

  componentDidMount(){
    this.fetchUser()
  }

  render(){

    return(
      <div>
        <Navbar/>
        <p>New Squad</p>
        <p>Squad name:</p>
        <input type="text" name="squadName" onChange={this.handleTextChange}/>
        <p>Select a faction:</p>
        <form onChange={this.handleRadioButtonChange}>
          <label htmlFor="Rebel">Rebel</label>
          <input type="radio" name="faction" value="Rebel" defaultChecked/>
          <label htmlFor="Imperial">Imperial</label>
          <input type="radio" name="faction" value="Imperial"/>
          <label htmlFor="Scum">Scum & Villiany</label>
          <input type="radio" name="faction" value="Scum"/>
        </form>
        <button onClick={this.submitForm}>Create Squad</button>
      </div>
    )
  }
}

export default NewSquadForm