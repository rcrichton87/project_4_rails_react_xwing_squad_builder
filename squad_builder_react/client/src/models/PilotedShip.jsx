class PilotedShip {

  constructor(data){
    this.id = data.id
    this.pilot = data.pilot
    this.ship = data.ship
    this.upgrades = data.applied_upgrades
  }
    
  totalCost(){
    let total = this.pilot.cost + this.ship.cost
    this.upgrades.forEach((appliedUpgrade) => {
      total += appliedUpgrade.upgrade.cost
    })
    return total
  }

}

export default PilotedShip
  

// module.exports = PilotedShip



// var PilotedShip = function(data) {

//     this.id = data.id
//     this.pilot = data.pilot
//     this.ship = data.ship
//     this.upgrades = data.applied_upgrades
  

//   PilotedShip.prototype = {
//     totalCost: function(){
//       var total = this.pilot.cost + this.ship.cost
//       this.upgrades.forEach(function(appliedUpgrade){
//         total += appliedUpgrade.upgrade.cost
//       })
//       return total
//     }.bind(this)

//   }
// }
  

// module.exports = PilotedShip