var PilotedShip = function(data) {

    this.id = data.id
    this.pilot = data.pilot
    this.ship = data.ship
    this.upgrades = data.applied_upgrades
  

  PilotedShip.prototype = {
    totalCost: function(){
      let total = this.pilot.cost + this.ship.cost
      this.upgrades.forEach(function(upgrade){
        total += upgrade.cost
      })

      return total
    }

  }
}
  

module.exports = PilotedShip