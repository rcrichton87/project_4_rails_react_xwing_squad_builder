AppliedUpgrade.destroy_all
Upgrade.destroy_all
PilotedShip.destroy_all
Pilot.destroy_all
Ship.destroy_all
Squad.destroy_all
User.destroy_all

user1 = User.create({email: "red5@yavin.com", password: 'iamajedi', password_confirmation: 'iamajedi'})
user2 = User.create({email: "v4der@empire.com", password: 'password', password_confirmation: 'password'})

squad1 = Squad.create({user_id: user1[:id], name: "Rogue Squadron", faction: "Rebel"})

ship1 = Ship.create({name: "T-65 X-Wing", cost: 21, faction: "Rebel", stats: "3,2,3,2", upgrade_slots: "astromech, torpedo, modification"})

pilot1 = Pilot.create({name: "Wedge Antilles", cost: 8, pilot_skill: 9, ability: "When attacking, reduce the defender's agility by 1", ship_id: ship1[:id]})

piloted_ship1 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot1[:id], ship_id: ship1[:id]})

upgrade1 = Upgrade.create({name: "R2 Astromech", slot: "astromech", cost: 1, text: "You may treat all 1 and 2 speed manoeuvres as green manoeuvres"})

applied_upgrade1 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: upgrade1[:id]})