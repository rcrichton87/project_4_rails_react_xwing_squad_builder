import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

class UpgradeSelector extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      slot: this.props.slot,
      currentUpgrade: this.props.upgrade,
      index: this.props.index,
      upgrades: []
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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

  render(){
    let text
    if(this.state.currentUpgrade){
      text = this.state.currentUpgrade
    } else {
      text = this.state.slot
    }

    const visibleUpgrades = this.state.upgrades.map((upgrade) => {
      if (upgrade.slot === this.state.slot){
        return (<p>{upgrade.name}</p>)
      }
    })

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