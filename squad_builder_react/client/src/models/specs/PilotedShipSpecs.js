var PilotedShip = require('../PilotedShip.js');
var assert = require('assert');

describe("PilotedShip", function(){

  var pilotedShip
  var pilot
  var ship
  var upgrades

  beforeEach(function(){
    ship = {name: "T-65 X-Wing", cost: 21, faction: "Rebel", stats: "3,2,3,2", upgrade_slots: "astromech, torpedo, modification", id: 4}
    pilot = {name: "Wedge Antilles", cost: 8, pilot_skill: 9, ability: "When attacking, reduce the defender's agility by 1", ship_id: ship.id, id: 5}
    upgrades = [
      {name: "R2-D2", slot: "astromech", cost: 4, text: "After performing a green manoeuvre, you may recover one shield", id:1},
      {name: "Hull upgrade", slot: "modification", cost: 3, text: "Increase your hull value by 1", id: 2}
    ]
    pilotedShip = new PilotedShip({id: 1, ship: ship, pilot: pilot, applied_upgrades: upgrades})

  })

  it("has a ship", function(){
    assert.strictEqual(ship, pilotedShip.ship);
  })  

  it("has a pilot", function(){
    assert.strictEqual(pilot, pilotedShip.pilot);
  })

  it("has an upgrades array", function(){
    assert.strictEqual(upgrades, pilotedShip.upgrades);
  })

  it("can calculate total cost", function(){
    assert.strictEqual(36, pilotedShip.totalCost());
  })



})