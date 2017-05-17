import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

class UpgradeSelector extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      slot: this.props.slot,
      currentUpgrade: this.props.upgrade,
      index: this.props.index,
      upgrades: [],
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.selectUpgrade = this.selectUpgrade.bind(this)
  }

  fetchUpgrades(){
    const req = new AjaxRequest()
    req.get("http://localhost:5000/api/upgrades", (err, upgrades, status) => { 
      if (err) { 
        throw err
      } 

      if(status === 200){
        this.setState({ 
          upgrades: upgrades
        })
      }
    }) 
  }

  componentDidMount(){
    this.fetchUpgrades()
  }

  openModal(){
    const modal = document.getElementById("modal" + this.state.index)
    modal.style.display = "block"  
  }

  closeModal(){
    const modal = document.getElementById("modal" + this.state.index)
    modal.style.display = "none"
  }

  selectUpgrade(event){
    const selectedUpgrade = this.state.upgrades[event.target.value]
    const req = new AjaxRequest()
    if(selectedUpgrade && this.state.currentUpgrade){
      req.post("http://localhost:5000/api/applied_upgrades/edit/" + this.state.currentUpgrade.id, JSON.stringify({upgrade_id: selectedUpgrade.id}), (error, response) => {
        this.setState({currentUpgrade: {upgrade: response.upgrade}})
      })
    } else if (selectedUpgrade) {
      req.post("http://localhost:5000/api/applied_upgrades", JSON.stringify({upgrade_id: selectedUpgrade.id, piloted_ship_id: this.props.pilotedShip.id}), (error, response) => {
        this.setState({currentUpgrade: {upgrade: response.upgrade}})
      })
    } else {
      console.log("picked none")
    }

  }

  render(){
    let text
    if(this.state.currentUpgrade){
      text = this.state.currentUpgrade.upgrade.name
    } else {
      text = this.state.slot
    }

    const visibleUpgrades = this.state.upgrades.map((upgrade, index) => {
      if (upgrade.slot === this.state.slot){
        return (
          <button value={index} onClick={this.selectUpgrade}>{upgrade.name}</button>
        )
      }
    })

    visibleUpgrades.push(<button value={-1} onClick={this.selectUpgrade}>None</button>)

    return(
      <div>
        <div id={"modal" + this.state.index} className="modal">
          <div className="modal-content">
            <span onClick={this.closeModal} className="close">&times;</span>
            {visibleUpgrades}
          </div>
        </div>
        <div onClick={this.openModal}>
          {text}
        </div>
      </div>
    )
  }

}

export default UpgradeSelector